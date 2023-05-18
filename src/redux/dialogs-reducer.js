const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.message.push({id: 2, message: body},)
            return state
        default:
            return state
    }

}

export let sendMessageCreator = () => ({type: SEND_MESSAGE})

export let updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY,  body: body,})


export default dialogsReducer;