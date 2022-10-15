import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogsPageStateType} from "../../redux/state";

export type DialogsPropsType = {
    state: DialogsPageStateType
}

const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = props.state.messages.map(m => <MessageItem message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messagesItems}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;