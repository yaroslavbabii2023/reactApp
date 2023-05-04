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

    let dialogs = [
        {id: 1, name: 'Yaroslav'},
        {id: 2, name: 'Oleksiy'},
        {id: 3, name: 'Petro'},
        {id: 4, name: 'Andriy'},
    ];
    let message = [
        {id: 1, message: 'Hello'},
        {id: 1, message: 'How are you'},
        {id: 1, message: 'Yolo'},
        {id: 1, message: 'Yo'},
    ];


    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = message.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs