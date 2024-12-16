import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SourceService } from "./source.service";
import { SourceControllerBase } from "./base/source.controller.base";

@swagger.ApiTags("sources")
@common.Controller("sources")
export class SourceController extends SourceControllerBase {
  constructor(protected readonly service: SourceService) {
    super(service);
  }
}
