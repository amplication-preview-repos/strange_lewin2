import { Injectable } from "@nestjs/common";

@Injectable()
export class DataLoaderService {
  constructor() {}
  async LoadDataFromSource1(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async LoadDataFromSource2(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async LoadDataFromSource3(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
