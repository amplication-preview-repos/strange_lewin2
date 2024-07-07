import * as graphql from "@nestjs/graphql";
import { SourceResolverBase } from "./base/source.resolver.base";
import { Source } from "./base/Source";
import { SourceService } from "./source.service";

@graphql.Resolver(() => Source)
export class SourceResolver extends SourceResolverBase {
  constructor(protected readonly service: SourceService) {
    super(service);
  }
}
