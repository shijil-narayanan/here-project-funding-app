//Import Main React
import React from "react";
import {render} from "react-dom";
//Import Less
import "css/base.less";
import { Provider } from 'react-redux';
import FundAnalysis from "FundAnalysisClass";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import {store} from './Store';

const route = (
    <div>
      <Provider store={store}>
        <Router history={hashHistory}>
              <Route path="/" exact="true" component={FundAnalysis} />
        </Router>
      </Provider>
    </div>
)
render(route,document.getElementById('root'));

