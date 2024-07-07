import { DataRecord as TDataRecord } from "../api/dataRecord/DataRecord";

export const DATARECORD_TITLE_FIELD = "oilName";

export const DataRecordTitle = (record: TDataRecord): string => {
  return record.oilName?.toString() || String(record.id);
};
