import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  username?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  name?: SortOrder;
  roleId?: SortOrder;
  userEmail?: SortOrder;
  fullName?: SortOrder;
  userPassword?: SortOrder;
  userRole?: SortOrder;
};
