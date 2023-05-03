import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name="Yaroslav" id="1"/>
                <DialogItem name="Oleksiy" id="2"/>
                <DialogItem name="Petro" id="3"/>
                <DialogItem name="Andriy" id="4"/>
            </div>
            <div className={s.messages}>
                <Message message="Hello"/>
                <Message message="How are you"/>
                <Message message="Yolo"/>
            </div>
        </div>
    )
}

export default Dialogs