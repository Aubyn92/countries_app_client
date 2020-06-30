import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Countries from './Countries'
import NoMatch from './NoMatch'

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/countries" component={Countries} />
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default App;
