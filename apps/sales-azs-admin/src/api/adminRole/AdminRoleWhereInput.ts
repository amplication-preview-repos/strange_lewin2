import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AdminRoleWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
