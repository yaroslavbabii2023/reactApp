const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 12},
        {id: 2, message: 'Its my first post', likeCount: 3},
        {id: 2, message: 'Its my ', likeCount: 5},
    ],
    newPostText: 'How are you?',
    profile: null,

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 1,
            };
            return {...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }

        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }

}

export let addPostActionCreator = () => ({type: ADD_POST})

export let updateNewPostTextCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT,  newText: text,})

export let setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile})

export default profileReducer;