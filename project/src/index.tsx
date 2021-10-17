import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  USER_NAME: 'Oliver.conner@gmail.com',
  PLACES_COUNT: 321,
  OFFER_COUNT:5,
};

ReactDOM.render(
  <React.StrictMode>
    <App userName = {Setting.USER_NAME} placesCount = {Setting.PLACES_COUNT} offerCount = {Setting.OFFER_COUNT} />
  </React.StrictMode>,
  document.getElementById('root'));
