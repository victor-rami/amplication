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
import { PluginVersionWhereInput } from "./PluginVersionWhereInput";
import { Type } from "class-transformer";
import { PluginVersionOrderByInput } from "./PluginVersionOrderByInput";

@ArgsType()
class PluginVersionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PluginVersionWhereInput,
  })
  @Field(() => PluginVersionWhereInput, { nullable: true })
  @Type(() => PluginVersionWhereInput)
  where?: PluginVersionWhereInput;

  @ApiProperty({
    required: false,
    type: [PluginVersionOrderByInput],
  })
  @Field(() => [PluginVersionOrderByInput], { nullable: true })
  @Type(() => PluginVersionOrderByInput)
  orderBy?: Array<PluginVersionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PluginVersionFindManyArgs };
