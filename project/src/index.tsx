import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {roomOffers} from './mocks/offers';
import {ReviewsToOffer} from './mocks/reviews';

const Setting = {
  USER_NAME: 'Oliver.conner@gmail.com',

};

ReactDOM.render(
  <React.StrictMode>
    <App userName = {Setting.USER_NAME} placesCount = {roomOffers.length}  offers = {roomOffers} reviews = {ReviewsToOffer}/>
  </React.StrictMode>,
  document.getElementById('root'),
);
