// Libraries
import {Navigate, Route, Routes} from 'react-router-dom';
import {Layout} from 'antd';

// Components
import ResultsTable from "../ResultsTable";

// Constants and Functions
import {routes} from '../../utils/routes';
const {Content} = Layout;

function Router() {
  return (
    <Content className={`bg-white flex flex-col flex-1 overflow-hidden min-h-screen py-6 px-8`}>
      <Routes>
        <Route path={routes.predictions} element={<ResultsTable />} />

        <Route path={'*'} element={<Navigate to={routes.predictions} />} />
      </Routes>
    </Content>
  );
}

export default Router;