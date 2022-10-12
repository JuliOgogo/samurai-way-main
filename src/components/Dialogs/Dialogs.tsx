import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string,
    id: number
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialogItem}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

type MessageItemPropsType = {
    message: string
}

const MessageItem = (props: MessageItemPropsType) => {
    return <div className={s.messageItem}>{props.message}</div>
}

const Dialogs = () => {

    const dialogsData = [
        {id: 1, name: 'Julia'},
        {id: 2, name: 'Maxim'},
        {id: 3, name: 'Katya'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'Galya'}
    ]

    const messagesData = [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Lol :D'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>

            <div className={s.messagesItems}>
                <MessageItem message={messagesData[0].message}/>
                <MessageItem message={messagesData[1].message}/>
                <MessageItem message={messagesData[2].message}/>
            </div>
        </div>
    );
}

export default Dialogs;