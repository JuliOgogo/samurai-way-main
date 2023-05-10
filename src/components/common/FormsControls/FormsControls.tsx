import React from "react";
import s from './FormsControls.module.css'
import {Field} from 'redux-form';

type FormControlPropsType = {
    input?: any
    meta?: any
}

const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children, ...props}) => {
    const hasError = touched && error

    return <div className={s.formsControls}>
        <div className={hasError ? s.errorTextarea : ''}>
            {children}
        </div>
        {hasError && <span className={s.errorSpan}>{error}</span>}
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

export const createField = (placeholder: string | null,
                            name: string,
                            component: React.ComponentType,
                            validate: any,
                            props: any = {},
                            text: string = '') =>
    <div>
        <Field placeholder={placeholder}
               name={name}
               component={component}
               validate={validate}
               {...props}/> {text}
    </div>