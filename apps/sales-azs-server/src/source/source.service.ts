import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SourceServiceBase } from "./base/source.service.base";

@Injectable()
export class SourceService extends SourceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
