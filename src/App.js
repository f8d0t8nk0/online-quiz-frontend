import React from 'react';
import {Provider} from 'react-redux';
import MainApp from "./components/MainApp";
import axios from "axios";
import store from "./redux/store";
import Login from "./components/Login";
import Register from "./components/Register";
import { Route } from 'react-router-dom';


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
              <MainApp />
          </div>
      </Provider>
  );
}
