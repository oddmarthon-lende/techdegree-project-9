import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {FourOFour} from './404';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/search" render={ () => <Redirect to="/"/>} />
      <Route exact path="/search/:tags" component={App} />
      <Route component={FourOFour} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
