import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState();

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        props.store.dispatch(updateNewMessageBodyCreator(e))
    }
    return <Dialogs onNewMessageChange={onNewMessageChange}
                    message={state.dialogsPage.message}
                    dialogs={state.dialogsPage.dialogs}
                    newMessageBody={state.dialogsPage.newMessageBody}
                    onSendMessageClick={onSendMessageClick}/>
}

export default DialogsContainer