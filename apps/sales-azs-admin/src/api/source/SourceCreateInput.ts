import { DataRecordCreateNestedManyWithoutSourcesInput } from "./DataRecordCreateNestedManyWithoutSourcesInput";

export type SourceCreateInput = {
  name?: string | null;
  dataRecords?: DataRecordCreateNestedManyWithoutSourcesInput;
};
