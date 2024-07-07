import * as graphql from "@nestjs/graphql";
import { GraphService } from "./graph.service";

export class GraphResolver {
  constructor(protected readonly service: GraphService) {}

  @graphql.Mutation(() => String)
  async CreateChart(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateChart(args);
  }
}
