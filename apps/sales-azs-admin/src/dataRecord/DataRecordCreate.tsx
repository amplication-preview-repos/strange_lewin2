import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SourceTitle } from "../source/SourceTitle";

export const DataRecordCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Sm_Key" source="smKey" />
        <DateTimeInput label="DateTime" source="dateTime" />
        <TextInput label="OilName" source="oilName" />
        <TextInput label="OilLongName" source="oilLongName" />
        <NumberInput label="LiterPrice" source="literPrice" />
        <NumberInput label="LiterLast" source="literLast" />
        <NumberInput label="AmountDeliv" source="amountDeliv" />
        <TextInput label="Type" source="typeField" />
        <NumberInput label="LiterDeliv" source="literDeliv" />
        <NumberInput label="AmountLast" source="amountLast" />
        <ReferenceInput source="source.id" reference="Source" label="Source">
          <SelectInput optionText={SourceTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
