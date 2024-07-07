import { SourceWhereUniqueInput } from "../source/SourceWhereUniqueInput";

export type DataRecordCreateInput = {
  smKey?: string | null;
  dateTime?: Date | null;
  oilName?: string | null;
  oilLongName?: string | null;
  literPrice?: number | null;
  literLast?: number | null;
  amountDeliv?: number | null;
  typeField?: string | null;
  literDeliv?: number | null;
  amountLast?: number | null;
  source?: SourceWhereUniqueInput | null;
};
