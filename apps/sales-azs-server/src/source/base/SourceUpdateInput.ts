/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { DataRecordUpdateManyWithoutSourcesInput } from "./DataRecordUpdateManyWithoutSourcesInput";
import { Type } from "class-transformer";
import { EnumSourceRole } from "./EnumSourceRole";

@InputType()
class SourceUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => DataRecordUpdateManyWithoutSourcesInput,
  })
  @ValidateNested()
  @Type(() => DataRecordUpdateManyWithoutSourcesInput)
  @IsOptional()
  @Field(() => DataRecordUpdateManyWithoutSourcesInput, {
    nullable: true,
  })
  dataRecords?: DataRecordUpdateManyWithoutSourcesInput;

  @ApiProperty({
    required: false,
    enum: EnumSourceRole,
  })
  @IsEnum(EnumSourceRole)
  @IsOptional()
  @Field(() => EnumSourceRole, {
    nullable: true,
  })
  role?: "Option1" | null;
}

export { SourceUpdateInput as SourceUpdateInput };
