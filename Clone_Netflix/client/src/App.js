import React, { useContext } from "react";
import "./app.scss";
import Home from "./page/home/Home";
import Search from "./page/home/search/Search";
import Watch from "./page/home/watch/Watch";
import Register from "./page/register/Register";
import Login from "./page/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home userAccount={user} /> : <Redirect to="/register" />}
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>

        {user && (
          <>
            <Route path="/movies">
              <Home type="movie" userAccount={user} />
            </Route>
            <Route path="/series">
              <Home type="series" userAccount={user} />
            </Route>
            <Route path="/search/:title">
              <Search userAccount={user} />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
