import { Module } from "@nestjs/common";
import { DataLoaderService } from "./dataloader.service";
import { DataLoaderController } from "./dataloader.controller";
import { DataLoaderResolver } from "./dataloader.resolver";

@Module({
  controllers: [DataLoaderController],
  providers: [DataLoaderService, DataLoaderResolver],
  exports: [DataLoaderService],
})
export class DataLoaderModule {}
