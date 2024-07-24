import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type AccountWhereInput = {
  id?: StringFilter;
  accountNumber?: StringNullableFilter;
  balance?: FloatNullableFilter;
  accountType?: "Option1";
  accBalance?: FloatNullableFilter;
  accNumber?: StringNullableFilter;
};
