import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="account_number" source="accountNumber" />
        <TextField label="balance" source="balance" />
        <TextField label="account_type" source="accountType" />
        <TextField label="acc_balance" source="accBalance" />
        <TextField label="acc_number" source="accNumber" />
      </SimpleShowLayout>
    </Show>
  );
};
