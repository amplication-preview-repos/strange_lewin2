import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type RoleWhereInput = {
  id?: StringFilter;
  users?: UserListRelationFilter;
};
