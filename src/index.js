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
      addPost={store.addPost.bind(store)}
      updatePostText={store.updatePostText.bind(store)}
    />,
    document.getElementById('root'),
  );
};
rerender(store.getState());
store.listener(rerender);
