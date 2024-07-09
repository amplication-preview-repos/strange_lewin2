import { Injectable } from "@nestjs/common";
import { SalesDataInput } from "../dataCollection/SalesDataInput";

@Injectable()
export class DataCollectionService {
  constructor() {}
  async CollectData(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async SaveData(args: SalesDataInput[]): Promise<string> {
    throw new Error("Not implemented");
  }
}
