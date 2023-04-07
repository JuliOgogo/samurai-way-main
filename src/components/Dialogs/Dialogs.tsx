import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogsPageStateType} from "../../redux/types";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type DialogsPropsType = {
    dialogsPageState: DialogsPageStateType
    addMessage: (message: string) => void
    isAuth: boolean
}

const Dialogs: React.FC<DialogsPropsType> = ({
                                                 dialogsPageState,
                                                 addMessage,
                                             }) => {

    const dialogsElements = dialogsPageState.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElements = dialogsPageState.messages.map(m => <MessageItem key={m.id} message={m.message}/>)

    const onSubmit = (formData: DialogsFormPropsType) => {
        console.log(formData)
        addMessage(formData.textMessage)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messagesItems}>
                {messagesElements}
                <ReduxDialogsAddMessageForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
}

type DialogsFormPropsType = {
    textMessage: string
}

const DialogsAddMessageForm: React.FC<InjectedFormProps<DialogsFormPropsType>> = ({handleSubmit}) => {
    return <form action="" onSubmit={handleSubmit}>
        <div>
            <Field placeholder={'enter your message'} name={'textMessage'} component={'textarea'}/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

const ReduxDialogsAddMessageForm = reduxForm<DialogsFormPropsType>({form: 'DialogsAddMessageForm'})(DialogsAddMessageForm)

export default Dialogs;