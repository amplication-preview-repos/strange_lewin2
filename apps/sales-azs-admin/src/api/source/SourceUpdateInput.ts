import { DataRecordUpdateManyWithoutSourcesInput } from "./DataRecordUpdateManyWithoutSourcesInput";

export type SourceUpdateInput = {
  name?: string | null;
  dataRecords?: DataRecordUpdateManyWithoutSourcesInput;
};
