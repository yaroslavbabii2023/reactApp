import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.message.map(m => <Message message={m.message}/>)


    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.onNewMessageChange(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={props.dialogsPage.newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder="Enter you message">

                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs