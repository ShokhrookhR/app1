import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './components/State/reduxStore';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

let rerender = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App store={store} />
      </Provider>
    </BrowserRouter>,

    document.getElementById('root'),
  );
};

rerender();
store.subscribe(() => {
  rerender();
});
