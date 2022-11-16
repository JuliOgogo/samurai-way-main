import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {StateType} from "./redux/state";
import {Friends} from "./components/Friends/Friends";
import {StoreType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

export type AppPropsType = {
    state: StateType
    store: StoreType
}

const App: React.FC<AppPropsType> = ({
                                         state,
                                         store
                                     }) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={state.sidebar}/>
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() => <DialogsContainer store={store}/>}/>
                <Route path='/profile' render={() => <Profile store={store}/>}/>
                <Route path='/news' render={News}/>
                <Route path='/music' render={Music}/>
                <Route path='/settings' render={Settings}/>
                <Route path='/friends' render={() => <Friends state={state.sidebar.friends}/>}/>
            </div>
        </div>
    );
}

export default App;
