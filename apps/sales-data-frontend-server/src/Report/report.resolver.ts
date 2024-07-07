import * as graphql from "@nestjs/graphql";
import { ReportService } from "./report.service";

export class ReportResolver {
  constructor(protected readonly service: ReportService) {}

  @graphql.Mutation(() => String)
  async GenerateReport(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GenerateReport(args);
  }
}
