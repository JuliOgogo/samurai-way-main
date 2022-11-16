import React from 'react';
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogsReducer";
import {StoreType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";

export type DialogsContainerPropsType = {
    store: StoreType
}

const DialogsContainer: React.FC<DialogsContainerPropsType> = ({store}) => {

    const state = store.getState().dialogsPage

    const addMessageOnClickHandler = () => {
        store.dispatch(addMessageAC())
    }

    const updateNewMessageOnChangeHandler = (text: string) => {
        store.dispatch(updateNewMessageAC(text))
    }

    return <Dialogs dialogsPageState={state}
                    addMessage={addMessageOnClickHandler}
                    updateNewMessage={updateNewMessageOnChangeHandler}/>
}

export default DialogsContainer;