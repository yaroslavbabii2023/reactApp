import {profileAPI, UsersAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 12},
        {id: 2, message: 'Its my first post', likeCount: 3},
        {id: 2, message: 'Its my ', likeCount: 5},
    ],
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: 1,
            };
            return {...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }

}

export let addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})

export let setStatus = (status) =>
    ({type: SET_STATUS, status})

export let setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile})

export let getUserProfile = (userId) => (dispatch) => {
    return UsersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export let getStatus = (userId) => (dispatch) => {
    return profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}


export let updateStatus = (status) => (dispatch) => {
    return profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}

export default profileReducer;