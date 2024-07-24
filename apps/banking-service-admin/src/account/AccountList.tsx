import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AccountList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Accounts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="account_number" source="accountNumber" />
        <TextField label="balance" source="balance" />
        <TextField label="account_type" source="accountType" />
        <TextField label="acc_balance" source="accBalance" />
        <TextField label="acc_number" source="accNumber" />
      </Datagrid>
    </List>
  );
};
