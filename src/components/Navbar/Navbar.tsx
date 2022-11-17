import React from 'react';
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {FriendsContainer} from "../Friends/FriendsContainer";

export type NavbarPropsType = {}

const Navbar: React.FC<NavbarPropsType> = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={`${s.item} ${s.friends}`}>
                <NavLink to="/friends" activeClassName={s.active}>Friends</NavLink>
                <FriendsContainer/>
            </div>
        </nav>
    );
}

export default Navbar;