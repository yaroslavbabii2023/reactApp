import profileReducer, {addPostActionCreator} from "./profile-reducer";

it('length of posts should be incremented', () => {
    let action =  addPostActionCreator("it-kamasutra")
    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCount: 12},
            {id: 2, message: 'Its my first post', likeCount: 3},
            {id: 2, message: 'Its my ', likeCount: 5},
        ],
    };

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
})


