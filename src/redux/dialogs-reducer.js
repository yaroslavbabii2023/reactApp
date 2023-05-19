const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'


let initialState = {
    message:[
        {id: 1, message: 'Hello'},
        {id: 1, message: 'How are you'},
        {id: 1, message: 'Yolo'},
        {id: 1, message: 'Yo'},
        {id: 1, message: 'English'},
    ],
    dialogs: [
        {id: 1, name: 'Yaroslav'},
        {id: 2, name: 'Oleksiy'},
        {id: 3, name: 'Petro'},
        {id: 4, name: 'Andriy'},
        {id: 5, name: 'Olga'},
    ],
    newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {

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