export type Account = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  accountNumber: string | null;
  balance: number | null;
  accountType?: "Option1" | null;
  accBalance: number | null;
  accNumber: string | null;
};
