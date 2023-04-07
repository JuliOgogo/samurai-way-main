import React from "react";
import s from './FormsControls.module.css'

type TextareaPropsType = {
    input: any
    meta: any
}

export const Textarea: React.FC<TextareaPropsType> = ({input, meta, ...props}) => {

    const error = meta.touched && meta.error

    return <div className={s.formsControls}>
        <textarea {...input} {...props} className={error ? s.errorTextarea : ''}/><br/>
        {error && <span className={s.errorSpan}>{meta.error}</span>}
    </div>
}