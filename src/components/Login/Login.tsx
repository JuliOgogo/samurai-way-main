import React from 'react';
import s from './Login.module.css';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {required} from '../../utils/validators/validators';
import {createField, Input} from '../common/FormsControls/FormsControls';
import {connect} from 'react-redux';
import {login} from '../../redux/authReducer';
import {Redirect} from 'react-router-dom';
import {AppRootStateType} from '../../redux/redux-store';

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
    error: string
}

const LoginForm: React.FC<InjectedFormProps<LoginFormPropsType>> = ({handleSubmit, error}) => {
    return <form action="" onSubmit={handleSubmit}>

        {createField('Login', 'login', Input, [required])}
        {createField('Password', 'password', Input, [required], {type: 'password'})}
        {createField(null, 'rememberMe', Input, [], {type: 'checkbox'}, 'Remember me')}

        <div>
            <button>Login</button>
        </div>
        {error && <div className={s.formError}>
            {error}
        </div>}
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