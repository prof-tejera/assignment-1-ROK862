import React from "react";
import styled from "styled-components";
import DocumentationView from "./views/DocumentationView";
import TimersView from "./views/TimersView";
import Helper from "./utils/helpers";
import Login from "./components/forms/Login";
import { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link /*, Redirect*/ } from "react-router-dom";
import { Helmet } from "react-helmet";



const Container = styled.div`
background: #0172bdc2;
height: 100vh;
display: block;
overflow: hidden;
`;

// Control access to components based on login status.
const getAccessBasedRender = (comp) => {
  return comp;
  /* // User account and access driven component rendering.
    if (Helper.sys.isLoggedIn()) return comp;

    const redi = <Redirect to="/" />;
    const user = Helper.sys.getGlobals().USER;
    const authorized = Helper.sys.getLogin(user);
    return (!user) ? redi : (authorized) ? comp : redi;
  */
}

function App() {
  let [ USER_DATA ] = useState(null);

  const getAccess = (comp) => {
    if (!USER_DATA || !Helper.sys.isLoggedIn()) {
      USER_DATA = Helper.sys.getUserData();
      return getAccessBasedRender(comp);
    } else {
      return comp;
    }
  }

  return (
    <Container>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Timers</Link>
            </li>
            <li>
              <Link to="/docs">Documentation</Link>
            </li>
            <li>
              <Link to="/login">{(Helper.sys.isLoggedIn()) ? "Sign out" : "Sign in"}</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/login">
            <div>
              <Login />
            </div>
          </Route>
          <Route exact path="/docs">
            {getAccess(<DocumentationView />)}
          </Route>
          <Route exact path="/">
            {getAccess(<TimersView />)}
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
