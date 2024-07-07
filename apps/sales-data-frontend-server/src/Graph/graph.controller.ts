import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GraphService } from "./graph.service";

@swagger.ApiTags("graphs")
@common.Controller("graphs")
export class GraphController {
  constructor(protected readonly service: GraphService) {}

  @common.Post("/create-chart")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateChart(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateChart(body);
      }
}
