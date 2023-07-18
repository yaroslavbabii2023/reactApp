
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                message: [...state.message, {id: 2, message: body}]
            };
        default:
            return state
    }
}

export let sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;