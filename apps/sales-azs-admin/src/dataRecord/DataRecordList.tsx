import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SOURCE_TITLE_FIELD } from "../source/SourceTitle";

export const DataRecordList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DataRecords"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
