// The polyfill will emulate a full ES6 environment (for old browsers)
// (including generators, which means async/await)
import 'babel-polyfill';
import language from '../common/language';
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-isomorphic-render/redux';
import common from './react-isomorphic-render';
import 'bootstrap-without-jquery';
import '../../assets/styles/include.scss';

// renders the webpage on the client side
render(
  {
    // enable/disable development mode
    development: _development_,

    // enable/disable Redux dev-tools
    development_tools: _development_tools_ ? require('./devtools') : false
  },
  common
);
