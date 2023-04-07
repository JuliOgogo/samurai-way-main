import React from 'react';
import s from './Login.module.css';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";

// === Login page ===

const Login: React.FC = () => {
    const onSubmit = (formData: LoginFormPropsType) => {
        console.log(formData)
    }

    return <div className={s.login}>
        <h1>LOGIN</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}

// Simple Login form ===

type LoginFormPropsType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<LoginFormPropsType>> = ({handleSubmit}) => {
    return <form action="" onSubmit={handleSubmit}>
        <div>
            <Field placeholder={'Login'}
                   name={'login'}
                   component={Input}
                   validate={[required]}/>
        </div>
        <div>
            <Field placeholder={'Password'}
                   name={'password'}
                   component={Input}
                   validate={[required]}/>
        </div>
        <div>
            <Field type={"checkbox"}
                   name={'rememberMe'}
                   component={Input}
                   validate={[]}/> Remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

// === Redux Login form ===

const ReduxLoginForm = reduxForm<LoginFormPropsType>({
    // a unique name for the form
    form: 'Login'
})(LoginForm)

// === === === ===

export default Login;