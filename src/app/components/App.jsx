import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import ROUTERS from "../../constants/router_constants";
import Nav from "./Nav";
import Home from "../../pages/Home/Components/Home";
import Men from "../../pages/Men/Components/Men";
import Women from "../../pages/Women/Components/Women";
import Shop from "../../pages/Shop/Components/Shop";
import Category from "../../pages/Category/Components/Category";
import Sales from "../../pages/Sales/Components/Sales";

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Nav />
      <Routes>
        <Route path={ROUTERS.HOME} exact element={<Home />} />
        <Route path={ROUTERS.MEN} exact element={<Men />} />
        <Route path={ROUTERS.WOMEN} exact element={<Women />} />
        <Route path={ROUTERS.SHOP} exact element={<Shop />} />
        <Route path={ROUTERS.CATEGORY} exact element={<Category />} />
        <Route path={ROUTERS.SALES} exact element={<Sales />} />
      </Routes>
    </Router>
  )
}

export default App;
