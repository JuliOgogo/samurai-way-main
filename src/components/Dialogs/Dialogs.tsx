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

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name={"Julia"} id={1}/>
                <DialogItem name={"Maxim"} id={2}/>
                <DialogItem name={"Katya"} id={3}/>
                <DialogItem name={"Alex"} id={4}/>
                <DialogItem name={"Galya"} id={5}/>

                {/*<div className={s.dialogItem}>
                    <NavLink to="/dialogs/1">Julia</NavLink>
                </div>
                <div className={s.dialogItem}>
                    <NavLink to="/dialogs/2">Maxim</NavLink>
                </div>
                <div className={s.dialogItem}>
                    <NavLink to="/dialogs/3">Katya</NavLink>
                </div>
                <div className={s.dialogItem + ' ' + s.activeItem}>
                    <NavLink to="/dialogs/4">Alex</NavLink>
                </div>
                <div className={s.dialogItem}>
                    <NavLink to="/dialogs/5">Galya</NavLink>
                </div>*/}
            </div>
            <div className={s.messagesItems}>
                <div className={s.messageItem}>Hello!</div>
                <div className={s.messageItem}>How are you?</div>
                <div className={s.messageItem}>Lol :D</div>
            </div>
        </div>
    );
}

export default Dialogs;