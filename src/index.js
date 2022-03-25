import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import {AppRouter} from './routers/AppRouter';

ReactDOM.render(
    <AppRouter/> ,
  document.getElementById('root')
);

