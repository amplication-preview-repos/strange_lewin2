import { DataRecord } from "../dataRecord/DataRecord";

export type Source = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  dataRecords?: Array<DataRecord>;
  role?: "Option1" | null;
};
