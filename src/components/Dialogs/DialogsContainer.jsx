import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


const MapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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

let AuthRedirectComponent = withAuthRedirect(Dialogs)
const DialogsContainer = connect(MapStateToProps, MapDispatchToProps)(AuthRedirectComponent)
export default DialogsContainer