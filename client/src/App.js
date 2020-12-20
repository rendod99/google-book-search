import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBooks from "./pages/SearchBooks";
//import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          {/*<Route exact path="/saved" component={Saved} />*/}
          <Route component={NoMatch} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
