import React from 'react'
import { Route, IndexRoute } from 'react-router'

import ContactAdam from './containers/ContactAdam';
import Home from './containers/Home'
import Layout from './containers/Layout'
import NotFound from './containers/NotFound'
import OpenSource from './containers/OpenSource';
import Resume from './containers/Resume';

export default () => {
  return (
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}/>
      <Route path="projects" component={OpenSource} />
      <Route path="resume" component={Resume} />
      <Route path="contact" component={ContactAdam} />
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
}
