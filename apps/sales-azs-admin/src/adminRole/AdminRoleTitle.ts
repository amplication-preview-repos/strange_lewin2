import { AdminRole as TAdminRole } from "../api/adminRole/AdminRole";

export const ADMINROLE_TITLE_FIELD = "name";

export const AdminRoleTitle = (record: TAdminRole): string => {
  return record.name?.toString() || String(record.id);
};
