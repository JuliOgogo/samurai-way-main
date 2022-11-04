import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StateType, updateNewPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPost={updateNewPost}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}