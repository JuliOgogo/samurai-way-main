import React from 'react';
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/types";
import {AppDispatchType} from "../../redux/redux-store";

export type DialogsContainerPropsType = {}

const mapStateToProps = (state: StateType) => {
    return {
        dialogsPageState: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        addMessage: () => dispatch(addMessageAC()),
        updateNewMessage: (text: string) => dispatch(updateNewMessageAC(text))
    }
}

export const DialogsContainer: React.FC<DialogsContainerPropsType> = connect(mapStateToProps, mapDispatchToProps)(Dialogs)