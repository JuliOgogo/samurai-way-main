import React from 'react';
import s from './Login.module.css';

type LoginPropsType = {}

const Login: React.FC<LoginPropsType> = () => {
    return <div className={s.login}>
        <h1>LOGIN</h1>
        <LoginForm/>
    </div>
}

type LoginFormPropsType = {}

const LoginForm: React.FC<LoginFormPropsType> = () => {
    return <form action="">
        <div>
            <input placeholder={'Login'}/>
        </div>
        <div>
            <input placeholder={'Password'}/>
        </div>
        <div>
            <input type={"checkbox"}/> Remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

export default Login;