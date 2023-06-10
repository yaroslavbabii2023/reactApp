
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
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                message: [...state.message, {id: 2, message: body}]
            };
        default:
            return state
    }

}

export let sendMessageCreator = () => ({type: SEND_MESSAGE})

export let updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY,  body: body,})


export default dialogsReducer;