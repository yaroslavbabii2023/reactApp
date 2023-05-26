import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = (props) => {
//     return <StoreContext.Consumer>
//         {
//             (store) => {
//                 let state = store.getState();
//
//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator())
//                 }
//
//                 let onNewMessageChange = (e) => {
//                     store.dispatch(updateNewMessageBodyCreator(e))
//                 }
//                 return <Dialogs onNewMessageChange={onNewMessageChange}
//                                 message={state.dialogsPage.message}
//                                 dialogs={state.dialogsPage.dialogs}
//                                 newMessageBody={state.dialogsPage.newMessageBody}
//                                 onSendMessageClick={onSendMessageClick}/>
//             }
//         }
//
//     </StoreContext.Consumer>
// }

const MapStateToProps = (state) => {
    return {
        message: state.dialogsPage.message,
        dialogs: state.dialogsPage.dialogs,
        newMessageBody: state.dialogsPage.newMessageBody,
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageCreator())
        },

        onNewMessageChange: (e) => {
            dispatch(updateNewMessageBodyCreator(e))

        }
    }
}

const DialogsContainer = connect(MapStateToProps, MapDispatchToProps)(Dialogs)

export default DialogsContainer