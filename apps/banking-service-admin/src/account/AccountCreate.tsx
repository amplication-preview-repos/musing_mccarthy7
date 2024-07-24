import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const AccountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="account_number" source="accountNumber" />
        <NumberInput label="balance" source="balance" />
        <SelectInput
          source="accountType"
          label="account_type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="acc_balance" source="accBalance" />
        <TextInput label="acc_number" source="accNumber" />
      </SimpleForm>
    </Create>
  );
};
