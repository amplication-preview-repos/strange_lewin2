import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DataLoaderService } from "./dataloader.service";

@swagger.ApiTags("dataLoaders")
@common.Controller("dataLoaders")
export class DataLoaderController {
  constructor(protected readonly service: DataLoaderService) {}

  @common.Post("/load-data/source1")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async LoadDataFromSource1(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.LoadDataFromSource1(body);
      }

  @common.Post("/load-data/source2")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async LoadDataFromSource2(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.LoadDataFromSource2(body);
      }

  @common.Post("/load-data/source3")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async LoadDataFromSource3(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.LoadDataFromSource3(body);
      }
}
