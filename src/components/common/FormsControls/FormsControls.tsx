import React from "react";
import s from './FormsControls.module.css'

type TextareaPropsType = {
    input: any
    meta: any
}

export const Textarea: React.FC<TextareaPropsType> = ({input, meta, ...props}) => {
    return <div className={s.formsControls}>
        <textarea {...input} {...props} className={s.errorTextarea}/><br/>
        <span className={s.errorSpan}>Some error</span>
    </div>
}