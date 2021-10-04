import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Page from './containers/Page';

ReactDOM.render(
  <React.StrictMode>
    <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/bedstead" type="text/css"/>
    <link href='https://css.gg/dice-6.css' rel='stylesheet'></link>
    <link href='https://css.gg/dice-5.css' rel='stylesheet'></link>
    <link href='https://css.gg/dice-4.css' rel='stylesheet'></link>
    <link href='https://css.gg/dice-3.css' rel='stylesheet'></link>
    <link href='https://css.gg/dice-2.css' rel='stylesheet'></link>
    <link href='https://css.gg/dice-1.css' rel='stylesheet'></link>
    <Page />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
