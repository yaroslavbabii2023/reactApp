const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


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
        },
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
    }
}

export let addPostActionCreator = () => ({type: ADD_POST})


export let updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT,  newText: text,})


export default store;

window.store = store;