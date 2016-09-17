import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from './pages/Layout'
import NotFound from './pages/NotFound'
import Home from './pages/Home'

export default () => {
  return (
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}/>
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
}
