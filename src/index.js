import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import state, { addPost, updatePostText } from './components/State/state';
// import { listener } from './components/State/state';
import store from './components/State/store';

let rerender = (state) => {
  ReactDOM.render(
    <App
      store={store}
      state={state}
      // addPost={store._addPost.bind(store)}
      // updatePostText={store._updatePostText.bind(store)}
      dispatch={store.dispatch.bind(store)}
    />,
    document.getElementById('root'),
  );
};
rerender(store.getState());
store.listener(rerender);
