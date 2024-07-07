import * as graphql from "@nestjs/graphql";
import { DataLoaderService } from "./dataloader.service";

export class DataLoaderResolver {
  constructor(protected readonly service: DataLoaderService) {}

  @graphql.Mutation(() => String)
  async LoadDataFromSource1(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.LoadDataFromSource1(args);
  }

  @graphql.Mutation(() => String)
  async LoadDataFromSource2(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.LoadDataFromSource2(args);
  }

  @graphql.Mutation(() => String)
  async LoadDataFromSource3(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.LoadDataFromSource3(args);
  }
}
