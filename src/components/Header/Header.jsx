import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img alt='' src="https://avatarquebec.org/wp-content/uploads/2021/10/Avatar_logo-horizontal_inverse.png.webp" />
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/Login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;