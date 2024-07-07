import { Injectable } from "@nestjs/common";

@Injectable()
export class GraphService {
  constructor() {}
  async CreateChart(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
