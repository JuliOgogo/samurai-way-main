import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {StateType} from "./redux/state";
import {Friends} from "./components/Friends/Friends";

export type AppPropsType = {
    state: StateType
}

const App = (props: AppPropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path='/profile' render={() => <Profile state={props.state.profilePage}/>}/>
                <Route path='/news' render={News}/>
                <Route path='/music' render={Music}/>
                <Route path='/settings' render={Settings}/>
                <Route path='/friends' render={() => <Friends state={props.state.sidebar.friends}/>}/>
            </div>
        </div>
    );
}

export default App;
