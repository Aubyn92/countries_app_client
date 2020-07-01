import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Countries from "./Countries";
import NoMatch from "./NoMatch";
import Navbar from "../shared/Navbar";
import AddCountry from "./AddCountry";
import EditCountry from "./EditCountry";
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import SignUp from './SignUp';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/countries" component={Countries} />
          <Route exact path="/countries/create" component={AddCountry} />
          <Route exact path="/countries/:id/edit" component={EditCountry} />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route component={NoMatch} />
        </Switch>
      </>
    );
  }
}

export default App;
