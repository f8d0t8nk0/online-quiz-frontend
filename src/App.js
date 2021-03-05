import React, {useState} from 'react';
import {Provider} from 'react-redux';
import MainApp from "./components/MainApp";
import { Route, Switch } from 'react-router-dom';
import Login from "./components/Login";
import axios from "axios";
import store from "./redux/store";

axios.interceptors.request.use(
    config => {
        config.headers.authorization = `Bearer ${localStorage.getItem('jwtToken')}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default function App() {

  return (
      <Provider store={store}>
          <div>
              {/*<Switch>*/}
              {/*  <Route exact path="/login" render={props => <Login {...props} />} />*/}
              {/*  <Route exact path="/" render={props => <MainApp {...props} />} />*/}
              {/*</Switch>*/}
              <MainApp />
          </div>
      </Provider>
  );
}
