import React from 'react';
import s from './Login.module.css';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../redux/redux-store";

// === Login page ===

type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType

const Login: React.FC<LoginPropsType> = ({isAuth, login}) => {
    const onSubmit = (formData: LoginFormPropsType) => {
        console.log(formData)
        login(formData.login, formData.password, formData.rememberMe)
    }

    if (isAuth) return <Redirect to={'/profile'}/>

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
                   type={'password'}
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

type MapStateToPropsType = {
    isAuth: boolean
}

type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login);