/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DataRecordWhereUniqueInput } from "./DataRecordWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DataRecordUpdateInput } from "./DataRecordUpdateInput";

@ArgsType()
class UpdateDataRecordArgs {
  @ApiProperty({
    required: true,
    type: () => DataRecordWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DataRecordWhereUniqueInput)
  @Field(() => DataRecordWhereUniqueInput, { nullable: false })
  where!: DataRecordWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DataRecordUpdateInput,
  })
  @ValidateNested()
  @Type(() => DataRecordUpdateInput)
  @Field(() => DataRecordUpdateInput, { nullable: false })
  data!: DataRecordUpdateInput;
}

export { UpdateDataRecordArgs as UpdateDataRecordArgs };
