import React from 'react';
import {addMessage} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {DialogsPageStateType} from "../../redux/types";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = {
    dialogsPageState: DialogsPageStateType
}

type MapDispatchToPropsType = {
    addMessage: (message: string) => void
}

type DialogsContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        dialogsPageState: state.dialogsPage,
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {addMessage}), withAuthRedirect)(Dialogs)