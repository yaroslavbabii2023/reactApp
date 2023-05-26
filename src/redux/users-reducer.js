const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


let initialState = {
    users: [
        {id: 1, followed: true, fullName: 'Yaroslav', status: 'I am a hungry', location: {city: 'Vinnitsa', country: 'Ukraine'}},
        {id: 2, followed: true, fullName: 'Dima', status: 'I am a busy', location: {city: 'Lviv', country: 'Ukraine'}},
        {id: 3, followed: true, fullName: 'Andriy', status: 'I am a small', location: {city: 'Kyiv', country: 'Ukraine'}},
        {id: 4, followed: false, fullName: 'Oleksandr', status: 'I am a happy', location: {city: 'Harkiv', country: 'Ukraine'}},
    ],

};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }

}

export let followAC = (userId) => ({type: FOLLOW, userId})
export let unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export let setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;