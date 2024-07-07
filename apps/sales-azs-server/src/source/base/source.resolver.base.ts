/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Source } from "./Source";
import { SourceCountArgs } from "./SourceCountArgs";
import { SourceFindManyArgs } from "./SourceFindManyArgs";
import { SourceFindUniqueArgs } from "./SourceFindUniqueArgs";
import { CreateSourceArgs } from "./CreateSourceArgs";
import { UpdateSourceArgs } from "./UpdateSourceArgs";
import { DeleteSourceArgs } from "./DeleteSourceArgs";
import { DataRecordFindManyArgs } from "../../dataRecord/base/DataRecordFindManyArgs";
import { DataRecord } from "../../dataRecord/base/DataRecord";
import { SourceService } from "../source.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Source)
export class SourceResolverBase {
  constructor(
    protected readonly service: SourceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Source",
    action: "read",
    possession: "any",
  })
  async _sourcesMeta(
    @graphql.Args() args: SourceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Source])
  @nestAccessControl.UseRoles({
    resource: "Source",
    action: "read",
    possession: "any",
  })
  async sources(@graphql.Args() args: SourceFindManyArgs): Promise<Source[]> {
    return this.service.sources(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Source, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Source",
    action: "read",
    possession: "own",
  })
  async source(
    @graphql.Args() args: SourceFindUniqueArgs
  ): Promise<Source | null> {
    const result = await this.service.source(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Source)
  @nestAccessControl.UseRoles({
    resource: "Source",
    action: "create",
    possession: "any",
  })
  async createSource(@graphql.Args() args: CreateSourceArgs): Promise<Source> {
    return await this.service.createSource({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Source)
  @nestAccessControl.UseRoles({
    resource: "Source",
    action: "update",
    possession: "any",
  })
  async updateSource(
    @graphql.Args() args: UpdateSourceArgs
  ): Promise<Source | null> {
    try {
      return await this.service.updateSource({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Source)
  @nestAccessControl.UseRoles({
    resource: "Source",
    action: "delete",
    possession: "any",
  })
  async deleteSource(
    @graphql.Args() args: DeleteSourceArgs
  ): Promise<Source | null> {
    try {
      return await this.service.deleteSource(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [DataRecord], { name: "dataRecords" })
  @nestAccessControl.UseRoles({
    resource: "DataRecord",
    action: "read",
    possession: "any",
  })
  async findDataRecords(
    @graphql.Parent() parent: Source,
    @graphql.Args() args: DataRecordFindManyArgs
  ): Promise<DataRecord[]> {
    const results = await this.service.findDataRecords(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
