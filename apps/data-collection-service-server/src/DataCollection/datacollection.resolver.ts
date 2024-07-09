import * as graphql from "@nestjs/graphql";
import { SalesDataInput } from "../dataCollection/SalesDataInput";
import { DataCollectionService } from "./datacollection.service";

export class DataCollectionResolver {
  constructor(protected readonly service: DataCollectionService) {}

  @graphql.Mutation(() => String)
  async CollectData(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CollectData(args);
  }

  @graphql.Mutation(() => String)
  async SaveData(
    @graphql.Args()
    args: SalesDataInput[]
  ): Promise<string> {
    return this.service.SaveData(args);
  }
}
