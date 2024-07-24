import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  accountNumber?: SortOrder;
  balance?: SortOrder;
  accountType?: SortOrder;
  accBalance?: SortOrder;
  accNumber?: SortOrder;
};
