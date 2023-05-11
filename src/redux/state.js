let rerenderEntireTree = () => {
    console.log("stay changed")
}
let state = {
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
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0,
    }

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
   state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}
export default state;