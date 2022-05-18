import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost } from './components/State/state';

export let rerender = (state) => {
  ReactDOM.render(<App state={state} addPost={addPost} />, document.getElementById('root'));
};
