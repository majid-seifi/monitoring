import { MiddlewareConsumer, Module } from '@nestjs/common';
import { LoggerMiddleware } from './logger/logger.middleware';
import { LoggerService } from './logger/logger.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  providers: [PrismaService, LoggerService],
})
export class LogModule {
  // using middleware for log for all routes
  configure(consumer: MiddlewareConsumer): void {
    // it just work when LOGGING config equal to 'enable'
    if (process.env.LOGGING === 'enable') {
      consumer.apply(LoggerMiddleware).forRoutes('*');
    }
  }
}
