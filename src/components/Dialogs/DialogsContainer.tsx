import React from 'react';
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {AppDispatchType, AppRootStateType} from "../../redux/redux-store";
import {DialogsPageStateType} from "../../redux/types";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = {
    dialogsPageState: DialogsPageStateType
}

type MapDispatchToPropsType = {
    addMessage: () => void
    updateNewMessage: (text: string) => void
}

type DialogsContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        dialogsPageState: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
    return {
        addMessage: () => dispatch(addMessageAC()),
        updateNewMessage: (text: string) => dispatch(updateNewMessageAC(text))
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)