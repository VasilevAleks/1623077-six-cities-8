/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {roomOffers} from './mocks/offers';
import {ReviewsToOffer} from './mocks/reviews';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { CITIES, USER_NAME } from './const';


const store = createStore(
  reducer,
  composeWithDevTools(),
);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App
        userName={USER_NAME}
        //offers={roomOffers}
        reviews={ReviewsToOffer}
        cities={CITIES}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
