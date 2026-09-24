import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class CatchEverythingFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    const httpStatus = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    // const message = exception instanceof HttpException ? exception.getResponse() : (exception as Error).message || "Internal server error";
    const res = exception instanceof HttpException ? exception.getResponse() : null;
    const message = typeof res === 'object' && res !== null 
      ? (res as any).message || res
      : res || (exception as Error).message || 'Internal server error';

    const responseBody = {
      statusCode: httpStatus,
      timeStamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(ctx.getRequest()),
      message: message
    }

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
