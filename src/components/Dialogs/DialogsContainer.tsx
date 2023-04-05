import React from 'react';
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {AppDispatchType, AppRootStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {DialogsPageStateType} from "../../redux/types";
import Dialogs from "./Dialogs";

type MapStateToPropsType = {
    dialogsPageState: DialogsPageStateType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    addMessage: () => void
    updateNewMessage: (text: string) => void
}

type DialogsContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        dialogsPageState: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
    return {
        addMessage: () => dispatch(addMessageAC()),
        updateNewMessage: (text: string) => dispatch(updateNewMessageAC(text))
    }
}

const AuthRedirectComponent = (props: DialogsContainerPropsType) => {
    if (!props.isAuth) return <Redirect to={'/login'}/>
    return <Dialogs {...props}/>
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)