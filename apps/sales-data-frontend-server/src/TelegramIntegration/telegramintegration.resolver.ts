import * as graphql from "@nestjs/graphql";
import { TelegramIntegrationService } from "./telegramintegration.service";

export class TelegramIntegrationResolver {
  constructor(protected readonly service: TelegramIntegrationService) {}

  @graphql.Mutation(() => String)
  async SendReportToTelegram(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SendReportToTelegram(args);
  }
}
