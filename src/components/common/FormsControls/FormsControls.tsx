import React from "react";
import s from './FormsControls.module.css'

type FormControlPropsType = {
    input?: any
    meta?: any
}

const FormControl: React.FC<FormControlPropsType> = ({meta, ...props}) => {
    const error = meta.touched && meta.error

    return <div className={s.formsControls}>
        <div className={error ? s.errorTextarea : ''}>
            {props.children}
        </div>
        {error && <span className={s.errorSpan}>{meta.error}</span>}
    </div>
}

export const Textarea: React.FC<FormControlPropsType> = ({input, ...props}) => {
    return <FormControl {...props}>
        <textarea {...input} {...props}/>
    </FormControl>
}

export const Input: React.FC<FormControlPropsType> = ({input, ...props}) => {
    return <FormControl {...props} >
        <input {...input} {...props}/>
    </FormControl>
}