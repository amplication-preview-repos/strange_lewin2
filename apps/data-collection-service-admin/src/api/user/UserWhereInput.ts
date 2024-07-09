import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  name?: StringNullableFilter;
  role?: RoleWhereUniqueInput;
  userEmail?: StringNullableFilter;
  fullName?: StringNullableFilter;
  userPassword?: StringNullableFilter;
  userRole?: StringNullableFilter;
};
