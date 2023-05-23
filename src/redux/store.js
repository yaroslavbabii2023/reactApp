import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 12},
                {id: 2, message: 'Its my first post', likeCount: 3},
                {id: 2, message: 'Its my ', likeCount: 5},
            ],
            newPostText: 'it-kamasutra.com',

        },
        dialogsPage: {
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
        },
        sidebar: {},
    },

    _callSubscriber() {
        console.log("stay changed")
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }
}




// export default store;
//
// window.store = store;
