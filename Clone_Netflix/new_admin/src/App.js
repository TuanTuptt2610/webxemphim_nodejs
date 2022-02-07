import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import "./App.css";
import Home from "./pages/home/Home";
import Analytics from "./pages/analytics/Analytics";
import UserClientList from "./pages/userClientList/UserClientList";
import UserClient from "./pages/userClient/UserClient";
import UserAdminList from "./pages/userAdminList/UserAdminList";
import UserAdmin from "./pages/userAdmin/UserAdmin";
import NewUserAdmin from "./pages/newUserAdmin/NewUserAdmin";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import AllList from "./pages/allList/AllList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
        {user && (
          <>
            <Topbar userAccount={user} />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                {user ? <Home /> : <Redirect to="/login" />}
              </Route>

              <Route path="/analytics">
                <Analytics />
              </Route>

              {/* user */}
              <Route path="/users">
                <UserClientList />
              </Route>
              <Route path="/user/:userId">
                <UserClient />
              </Route>

              {/* admin */}
              <Route path="/admins">
                <UserAdminList />
              </Route>
              <Route path="/admin/:userId">
                <UserAdmin userAccount={user} />
              </Route>
              <Route path="/newadmin">
                <NewUserAdmin />
              </Route>

              {/* movie */}
              <Route path="/movies">
                <ProductList />
              </Route>
              <Route path="/movie/:movieId">
                <Product />
              </Route>
              <Route path="/newmovie">
                <NewProduct />
              </Route>

              {/* list */}
              <Route path="/lists">
                <AllList />
              </Route>
              <Route path="/list/:listId">
                <List />
              </Route>
              <Route path="/newlist">
                <NewList />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
