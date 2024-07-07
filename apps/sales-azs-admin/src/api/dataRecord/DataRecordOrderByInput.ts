import { SortOrder } from "../../util/SortOrder";

export type DataRecordOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  smKey?: SortOrder;
  dateTime?: SortOrder;
  oilName?: SortOrder;
  oilLongName?: SortOrder;
  literPrice?: SortOrder;
  literLast?: SortOrder;
  amountDeliv?: SortOrder;
  typeField?: SortOrder;
  literDeliv?: SortOrder;
  amountLast?: SortOrder;
  sourceId?: SortOrder;
};
