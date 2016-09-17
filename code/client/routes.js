import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from './pages/Layout'
import NotFound from './pages/NotFound'
import Home from './pages/Home'

export default () => {
  const render = () => {
    return (
      <Route path="/" component={Layout}>
        <IndexRoute component={Home}/>
        <Route path="*" component={NotFound}/>
      </Route>
    );
  };
}
