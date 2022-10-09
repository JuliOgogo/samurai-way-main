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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={"Julia"} id={1}/>
                <DialogItem name={"Maxim"} id={2}/>
                <DialogItem name={"Katya"} id={3}/>
                <DialogItem name={"Alex"} id={4}/>
                <DialogItem name={"Galya"} id={5}/>
            </div>

            <div className={s.messagesItems}>
                <MessageItem message={'Hello!'}/>
                <MessageItem message={'How are you?'}/>
                <MessageItem message={'Lol :D'}/>
            </div>
        </div>
    );
}

export default Dialogs;