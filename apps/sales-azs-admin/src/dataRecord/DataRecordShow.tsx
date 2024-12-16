import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { SOURCE_TITLE_FIELD } from "../source/SourceTitle";

export const DataRecordShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Sm_Key" source="smKey" />
        <TextField label="DateTime" source="dateTime" />
        <TextField label="OilName" source="oilName" />
        <TextField label="OilLongName" source="oilLongName" />
        <TextField label="LiterPrice" source="literPrice" />
        <TextField label="LiterLast" source="literLast" />
        <TextField label="AmountDeliv" source="amountDeliv" />
        <TextField label="Type" source="typeField" />
        <TextField label="LiterDeliv" source="literDeliv" />
        <TextField label="AmountLast" source="amountLast" />
        <ReferenceField label="Source" source="source.id" reference="Source">
          <TextField source={SOURCE_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
