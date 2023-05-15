
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
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log("stay changed")
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0,
        }

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;

window.store = store;