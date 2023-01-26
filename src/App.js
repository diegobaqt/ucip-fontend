// Libraries
import {Layout} from "antd";
import {useSelector} from "react-redux";

// Store
import * as generalSelectors from "./store/redux/selectors/generalSelectors";

// Styles
import 'antd/dist/antd.css';
import './styles/index.css';
import 'moment/locale/es-mx';

// Components
import Router from "./components/general/Router";
import Loading from "./components/general/Loading";

function App() {
  const isLoading = useSelector(generalSelectors.isLoadingSelector);

  return (
    <Layout className={'flex'}>
      {isLoading && <Loading />}

      <Router />
    </Layout>
  );
}

export default App;
