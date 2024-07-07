import { Injectable } from "@nestjs/common";

@Injectable()
export class ReportService {
  constructor() {}
  async GenerateReport(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
