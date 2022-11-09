import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {ActionType, addMessageAC, DialogsPageStateType, updateNewMessageAC} from "../../redux/state";

export type DialogsPropsType = {
    dialogsPageState: DialogsPageStateType
    dispatch: (action: ActionType) => void
}

const Dialogs: React.FC<DialogsPropsType> = ({dialogsPageState, dispatch}) => {

    const dialogsElements = dialogsPageState.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = dialogsPageState.messages.map(m => <MessageItem message={m.message}/>)

    const newMessageText = dialogsPageState.newMessageText

    const onClickHandler = () => {
        dispatch(addMessageAC())
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        dispatch(updateNewMessageAC(text))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messagesItems}>
                {messagesElements}
                <div>
                    <div>
                        <textarea placeholder={'enter your message'}
                                  value={newMessageText}
                                  onChange={onChangeHandler}/>
                    </div>
                    <div>
                        <button onClick={onClickHandler}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;