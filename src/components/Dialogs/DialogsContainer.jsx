import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {
    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState();

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }

                let onNewMessageChange = (e) => {
                    store.dispatch(updateNewMessageBodyCreator(e))
                }
                return <Dialogs onNewMessageChange={onNewMessageChange}
                                message={state.dialogsPage.message}
                                dialogs={state.dialogsPage.dialogs}
                                newMessageBody={state.dialogsPage.newMessageBody}
                                onSendMessageClick={onSendMessageClick}/>
            }
        }

        </StoreContext.Consumer>
}

export default DialogsContainer