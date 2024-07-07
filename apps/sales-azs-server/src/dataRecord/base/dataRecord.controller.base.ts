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
import { DataRecordService } from "../dataRecord.service";
import { DataRecordCreateInput } from "./DataRecordCreateInput";
import { DataRecord } from "./DataRecord";
import { DataRecordFindManyArgs } from "./DataRecordFindManyArgs";
import { DataRecordWhereUniqueInput } from "./DataRecordWhereUniqueInput";
import { DataRecordUpdateInput } from "./DataRecordUpdateInput";

export class DataRecordControllerBase {
  constructor(protected readonly service: DataRecordService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DataRecord })
  async createDataRecord(
    @common.Body() data: DataRecordCreateInput
  ): Promise<DataRecord> {
    return await this.service.createDataRecord({
      data: {
        ...data,

        source: data.source
          ? {
              connect: data.source,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DataRecord] })
  @ApiNestedQuery(DataRecordFindManyArgs)
  async dataRecords(@common.Req() request: Request): Promise<DataRecord[]> {
    const args = plainToClass(DataRecordFindManyArgs, request.query);
    return this.service.dataRecords({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DataRecord })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async dataRecord(
    @common.Param() params: DataRecordWhereUniqueInput
  ): Promise<DataRecord | null> {
    const result = await this.service.dataRecord({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: DataRecord })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDataRecord(
    @common.Param() params: DataRecordWhereUniqueInput,
    @common.Body() data: DataRecordUpdateInput
  ): Promise<DataRecord | null> {
    try {
      return await this.service.updateDataRecord({
        where: params,
        data: {
          ...data,

          source: data.source
            ? {
                connect: data.source,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: DataRecord })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDataRecord(
    @common.Param() params: DataRecordWhereUniqueInput
  ): Promise<DataRecord | null> {
    try {
      return await this.service.deleteDataRecord({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
