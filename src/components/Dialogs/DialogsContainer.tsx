import React from 'react';
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {StoreContext} from "../../StoreContext";

export type DialogsContainerPropsType = {}

const DialogsContainer: React.FC<DialogsContainerPropsType> = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {

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
            }}
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;