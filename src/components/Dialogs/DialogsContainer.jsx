import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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


export default compose(
    connect(MapStateToProps, MapDispatchToProps),
    withAuthRedirect
)(Dialogs)