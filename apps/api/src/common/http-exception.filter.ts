import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { CORRELATION_ID_HEADER, type ApiErrorBody } from '@sounds-university/contracts';
import type { Request, Response } from 'express';

@Catch()
export class GlobalHttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalHttpExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const correlationId = String(request.headers[CORRELATION_ID_HEADER] ?? 'unknown');

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let code = 'internal_error';
    let message = 'An unexpected error occurred';
    let details: unknown;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();
      code = status >= 500 ? 'internal_error' : 'request_error';

      if (typeof exceptionResponse === 'string') {
        message = status >= 500 ? 'An unexpected error occurred' : exceptionResponse;
      } else if (typeof exceptionResponse === 'object' && exceptionResponse !== null) {
        const body = exceptionResponse as Record<string, unknown>;
        if (typeof body.message === 'string') {
          message = status >= 500 ? 'An unexpected error occurred' : body.message;
        } else if (Array.isArray(body.message)) {
          message = 'Request validation failed';
          details = body.message;
          code = 'validation_error';
        }
      }
    }

    this.logger.error({
      msg: 'request_failed',
      correlationId,
      path: request.url,
      method: request.method,
      status,
      err:
        exception instanceof Error
          ? { name: exception.name, message: exception.message, stack: exception.stack }
          : { message: String(exception) },
    });

    const payload: ApiErrorBody = {
      code,
      message,
      correlationId,
      ...(details === undefined ? {} : { details }),
    };

    response.status(status).json(payload);
  }
}
