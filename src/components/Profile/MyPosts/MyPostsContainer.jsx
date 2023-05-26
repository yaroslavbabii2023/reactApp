import React from 'react';
import {addPostActionCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

//
// const MyPostsContainer = () => {
//     return <StoreContext.Consumer>
//         {
//             (store) => {
//                 let state = store.getState();
//
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 }
//
//                 let onPostChange = (text) => {
//                     let action = updateNewPostTextCreator(text)
//                     store.dispatch(action);
//                 }
//
//
//             return <MyPosts updateNewPostText={onPostChange}
//                      addPost={addPost}
//                      newPostText={state.profilePage.newPostText}
//                      posts={state.profilePage.posts}/>
//             }
//         }
//
//         </StoreContext.Consumer>
//
// }

const MapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },

        updateNewPostText: (text) => {
            let action = updateNewPostTextCreator(text)
            dispatch(action);
        }
    }
}


const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts)


export default MyPostsContainer;