import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

const Header: React.FC<HeaderPropsType> = ({isAuth, login, logout}) => {
    return (
        <header className={s.header}>
            <img
                src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn"
                alt=""/>
            <div className={s.loginBlock}>
                {isAuth ? <div>{login} <button onClick={logout}>Log out</button></div> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;