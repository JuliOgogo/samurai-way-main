import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";

export type DialogsPropsType = {}

const Dialogs = (props: DialogsPropsType) => {

    const dialogs = [
        {id: 1, name: 'Julia'},
        {id: 2, name: 'Maxim'},
        {id: 3, name: 'Katya'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'Galya'}
    ]
    const messages = [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Lol :D'},
    ]

    const dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = messages.map(m => <MessageItem message={m.message}/>)

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