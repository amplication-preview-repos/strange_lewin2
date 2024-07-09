import { Module } from "@nestjs/common";
import { DataCollectionService } from "./datacollection.service";
import { DataCollectionController } from "./datacollection.controller";
import { DataCollectionResolver } from "./datacollection.resolver";

@Module({
  controllers: [DataCollectionController],
  providers: [DataCollectionService, DataCollectionResolver],
  exports: [DataCollectionService],
})
export class DataCollectionModule {}
