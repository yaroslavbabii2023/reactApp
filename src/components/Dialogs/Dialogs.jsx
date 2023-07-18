import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {

    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.message.map(m => <Message message={m.message}/>)


    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody)
    }

    if (!props.isAuth) return <Navigate to={"/login"}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name="newMessageBody" placeholder="Enter you message"/>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs