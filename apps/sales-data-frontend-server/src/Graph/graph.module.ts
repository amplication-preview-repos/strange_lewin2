import { Module } from "@nestjs/common";
import { GraphService } from "./graph.service";
import { GraphController } from "./graph.controller";
import { GraphResolver } from "./graph.resolver";

@Module({
  controllers: [GraphController],
  providers: [GraphService, GraphResolver],
  exports: [GraphService],
})
export class GraphModule {}
