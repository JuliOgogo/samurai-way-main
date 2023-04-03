import React from 'react';
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppDispatchType, AppRootStateType} from "../../redux/redux-store";

export type DialogsContainerPropsType = {}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogsPageState: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        addMessage: () => dispatch(addMessageAC()),
        updateNewMessage: (text: string) => dispatch(updateNewMessageAC(text))
    }
}

export const DialogsContainer: React.FC<DialogsContainerPropsType> = connect(mapStateToProps, mapDispatchToProps)(Dialogs)