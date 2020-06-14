import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import PageOne from '../PageOne/PageOne';
import PageTwo from '../PageTwo/PageTwo';

import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    // Use HashRouter for routing on static pages
    <Router>
      <Switch>
        <Route exact path="/">
          <PageOne />
        </Route>
        <Route path="/page-two">
          <PageTwo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
