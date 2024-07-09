import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DataCollectionService } from "./datacollection.service";
import { SalesDataInput } from "../dataCollection/SalesDataInput";

@swagger.ApiTags("dataCollections")
@common.Controller("dataCollections")
export class DataCollectionController {
  constructor(protected readonly service: DataCollectionService) {}

  @common.Post("/collect-data")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CollectData(
    @common.Body()
    body: SalesDataInput[]
  ): Promise<string> {
        return this.service.CollectData(body);
      }

  @common.Post("/save-data")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SaveData(
    @common.Body()
    body: SalesDataInput[]
  ): Promise<string> {
        return this.service.SaveData(body);
      }
}
