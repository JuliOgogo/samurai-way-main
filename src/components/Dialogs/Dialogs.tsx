import React, {RefObject} from 'react';
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

    const newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef()

    const onClickHandler = () => {
        dispatch(addMessageAC())
    }

    const onChangeHandler = () => {
        const text = newMessageElement.current?.value
        dispatch(updateNewMessageAC(text ? text : ''))
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
                        <textarea ref={newMessageElement}
                                  value={dialogsPageState.newMessageText}
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