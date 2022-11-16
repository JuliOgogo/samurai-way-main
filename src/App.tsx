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
import {AppDispatchType, StoreType} from "./redux/redux-store";

export type AppPropsType = {
    state: StateType
    dispatch: AppDispatchType
    store: StoreType
}

const App: React.FC<AppPropsType> = ({
                                         state,
                                         dispatch,
                                         store
                                     }) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={state.sidebar}/>
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() => <Dialogs dialogsPageState={state.dialogsPage}
                                                              dispatch={dispatch}/>}/>
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
