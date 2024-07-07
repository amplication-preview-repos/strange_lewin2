import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DataRecordList } from "./dataRecord/DataRecordList";
import { DataRecordCreate } from "./dataRecord/DataRecordCreate";
import { DataRecordEdit } from "./dataRecord/DataRecordEdit";
import { DataRecordShow } from "./dataRecord/DataRecordShow";
import { SourceList } from "./source/SourceList";
import { SourceCreate } from "./source/SourceCreate";
import { SourceEdit } from "./source/SourceEdit";
import { SourceShow } from "./source/SourceShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SalesAZS"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="DataRecord"
          list={DataRecordList}
          edit={DataRecordEdit}
          create={DataRecordCreate}
          show={DataRecordShow}
        />
        <Resource
          name="Source"
          list={SourceList}
          edit={SourceEdit}
          create={SourceCreate}
          show={SourceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
