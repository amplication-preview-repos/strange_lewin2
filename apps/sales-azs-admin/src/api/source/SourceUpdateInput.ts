import { DataRecordUpdateManyWithoutSourcesInput } from "./DataRecordUpdateManyWithoutSourcesInput";

export type SourceUpdateInput = {
  name?: string | null;
  dataRecords?: DataRecordUpdateManyWithoutSourcesInput;
  role?: "Option1" | null;
};
