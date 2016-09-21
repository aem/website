import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from './containers/Layout'
import NotFound from './containers/NotFound'
import Home from './containers/Home'

export default () => {
  return (
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}/>
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
}
