import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Countries from './Countries';
import NoMatch from './NoMatch';
import Navbar from "../shared/Navbar";
import AddCountry from './AddCountry';
import EditCountry from './EditCountry';

class App extends React.Component {
  render() {
    return (
      <>
      <Navbar />
      <Switch>
        <Route path="/countries/create" component={AddCountry} />
        <Route exact path="/countries/:id/edit" component={EditCountry} />
        <Route path="/countries" component={Countries} />
        <Route exact path="/countries" render={(props) => <Countries {...props} myProp="my prop" />} />
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
      </>
    );
  }
}

export default App;
