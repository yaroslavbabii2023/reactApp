import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Yaroslav</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Oleksiy</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Petro</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Andriy</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hello
                </div>
                <div className={s.message}>
                    How are you
                </div>
                <div className={s.message}>
                    Yolo
                </div>
            </div>
        </div>
    )
}

export default Dialogs