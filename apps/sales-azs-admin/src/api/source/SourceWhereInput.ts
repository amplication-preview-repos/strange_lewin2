import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DataRecordListRelationFilter } from "../dataRecord/DataRecordListRelationFilter";

export type SourceWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  dataRecords?: DataRecordListRelationFilter;
};
