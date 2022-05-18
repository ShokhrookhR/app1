import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import state from "./components/State/state"
import {addPost} from "./components/State/state"
import { rerender } from "./render";

rerender(state);



