import { Module } from "@nestjs/common";
import { SourceModuleBase } from "./base/source.module.base";
import { SourceService } from "./source.service";
import { SourceController } from "./source.controller";
import { SourceResolver } from "./source.resolver";

@Module({
  imports: [SourceModuleBase],
  controllers: [SourceController],
  providers: [SourceService, SourceResolver],
  exports: [SourceService],
})
export class SourceModule {}
