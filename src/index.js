import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import state, { addPost, updatePostText } from './components/State/state';
import { listener } from './components/State/state';

let rerender = (state) => {
  ReactDOM.render(
    <App state={state} addPost={addPost} updatePostText={updatePostText} />,
    document.getElementById('root'),
  );
};
rerender(state);
listener(rerender);
