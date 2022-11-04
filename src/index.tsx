import React from 'react';
import './index.css';
import {addMessage, addPost, state, StateType, subscriber, updateNewMessage, updateNewPost} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPost={updateNewPost}
                 addMessage={addMessage}
                 updateNewMessage={updateNewMessage}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state)

subscriber(rerenderEntireTree)