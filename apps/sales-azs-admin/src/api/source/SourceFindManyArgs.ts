import { SourceWhereInput } from "./SourceWhereInput";
import { SourceOrderByInput } from "./SourceOrderByInput";

export type SourceFindManyArgs = {
  where?: SourceWhereInput;
  orderBy?: Array<SourceOrderByInput>;
  skip?: number;
  take?: number;
};
