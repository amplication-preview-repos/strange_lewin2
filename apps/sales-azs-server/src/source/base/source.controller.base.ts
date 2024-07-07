/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SourceService } from "../source.service";
import { SourceCreateInput } from "./SourceCreateInput";
import { Source } from "./Source";
import { SourceFindManyArgs } from "./SourceFindManyArgs";
import { SourceWhereUniqueInput } from "./SourceWhereUniqueInput";
import { SourceUpdateInput } from "./SourceUpdateInput";
import { DataRecordFindManyArgs } from "../../dataRecord/base/DataRecordFindManyArgs";
import { DataRecord } from "../../dataRecord/base/DataRecord";
import { DataRecordWhereUniqueInput } from "../../dataRecord/base/DataRecordWhereUniqueInput";

export class SourceControllerBase {
  constructor(protected readonly service: SourceService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Source })
  async createSource(@common.Body() data: SourceCreateInput): Promise<Source> {
    return await this.service.createSource({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Source] })
  @ApiNestedQuery(SourceFindManyArgs)
  async sources(@common.Req() request: Request): Promise<Source[]> {
    const args = plainToClass(SourceFindManyArgs, request.query);
    return this.service.sources({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Source })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async source(
    @common.Param() params: SourceWhereUniqueInput
  ): Promise<Source | null> {
    const result = await this.service.source({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Source })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSource(
    @common.Param() params: SourceWhereUniqueInput,
    @common.Body() data: SourceUpdateInput
  ): Promise<Source | null> {
    try {
      return await this.service.updateSource({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Source })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSource(
    @common.Param() params: SourceWhereUniqueInput
  ): Promise<Source | null> {
    try {
      return await this.service.deleteSource({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/dataRecords")
  @ApiNestedQuery(DataRecordFindManyArgs)
  async findDataRecords(
    @common.Req() request: Request,
    @common.Param() params: SourceWhereUniqueInput
  ): Promise<DataRecord[]> {
    const query = plainToClass(DataRecordFindManyArgs, request.query);
    const results = await this.service.findDataRecords(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        smKey: true,
        dateTime: true,
        oilName: true,
        oilLongName: true,
        literPrice: true,
        literLast: true,
        amountDeliv: true,
        typeField: true,
        literDeliv: true,
        amountLast: true,

        source: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/dataRecords")
  async connectDataRecords(
    @common.Param() params: SourceWhereUniqueInput,
    @common.Body() body: DataRecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dataRecords: {
        connect: body,
      },
    };
    await this.service.updateSource({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/dataRecords")
  async updateDataRecords(
    @common.Param() params: SourceWhereUniqueInput,
    @common.Body() body: DataRecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dataRecords: {
        set: body,
      },
    };
    await this.service.updateSource({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/dataRecords")
  async disconnectDataRecords(
    @common.Param() params: SourceWhereUniqueInput,
    @common.Body() body: DataRecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dataRecords: {
        disconnect: body,
      },
    };
    await this.service.updateSource({
      where: params,
      data,
      select: { id: true },
    });
  }
}
