import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { LoggerService } from './logger.service';
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private logger?: LoggerService) {}
  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, path } = request;
    const userAgent = request.get('user-agent') || '';
    response.on('finish', () => {
      const { statusCode } = response;
      this.logger.createLog({
        ip,
        method,
        path,
        statusCode,
        userAgent,
        responseAt: new Date(),
      });
    });

    next();
  }
}
