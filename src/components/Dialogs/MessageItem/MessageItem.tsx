import s from "../Dialogs.module.css";
import React from "react";

type MessageItemPropsType = {
    message: string
}
export const MessageItem = (props: MessageItemPropsType) => {
    return <div className={s.messageItem}>{props.message}</div>
}