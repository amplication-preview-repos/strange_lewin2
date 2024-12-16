import { Source as TSource } from "../api/source/Source";

export const SOURCE_TITLE_FIELD = "name";

export const SourceTitle = (record: TSource): string => {
  return record.name?.toString() || String(record.id);
};
