import { JsonValue } from "type-fest";
import { Role } from "../role/Role";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  name: string | null;
  role?: Role | null;
  userEmail: string | null;
  fullName: string | null;
  userPassword: string | null;
  userRole: string | null;
};
