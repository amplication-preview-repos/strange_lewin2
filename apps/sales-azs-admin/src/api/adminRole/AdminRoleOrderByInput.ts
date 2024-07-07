import { SortOrder } from "../../util/SortOrder";

export type AdminRoleOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  permissions?: SortOrder;
};
