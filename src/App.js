import React from 'react';
import './App.css';
import { GlobalProvider } from './context/Provider'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <GlobalProvider>
      <Router>
          <Switch>
            {routes.map((route, index) => (
            <Route 
              key={index}
              path={route.path} 
              exact
              render = {(props) => <route.component {...props} />}
            ></Route>
            ))}
          </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
