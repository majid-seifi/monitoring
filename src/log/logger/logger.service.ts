import { createParamDecorator, ExecutionContext, Injectable } from "@nestjs/common";
import { Prisma, Log as LogModel } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class LoggerService {
  constructor(private prisma: PrismaService) {}

  async createLog(data: Prisma.LogCreateInput): Promise<LogModel> {
    return this.prisma.log.create({
      data,
    });
  }
}
