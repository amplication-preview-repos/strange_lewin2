import { InputJsonValue } from "../../types";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  name?: string | null;
  role?: RoleWhereUniqueInput | null;
  userEmail?: string | null;
  fullName?: string | null;
  userPassword?: string | null;
  userRole?: string | null;
};
