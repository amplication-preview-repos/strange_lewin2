import { UserCreateNestedManyWithoutRolesInput } from "./UserCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  users?: UserCreateNestedManyWithoutRolesInput;
};
