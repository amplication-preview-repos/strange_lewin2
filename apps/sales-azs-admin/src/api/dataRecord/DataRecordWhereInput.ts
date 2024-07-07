import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { SourceWhereUniqueInput } from "../source/SourceWhereUniqueInput";

export type DataRecordWhereInput = {
  id?: StringFilter;
  smKey?: StringNullableFilter;
  dateTime?: DateTimeNullableFilter;
  oilName?: StringNullableFilter;
  oilLongName?: StringNullableFilter;
  literPrice?: FloatNullableFilter;
  literLast?: FloatNullableFilter;
  amountDeliv?: FloatNullableFilter;
  typeField?: StringNullableFilter;
  literDeliv?: FloatNullableFilter;
  amountLast?: FloatNullableFilter;
  source?: SourceWhereUniqueInput;
};
