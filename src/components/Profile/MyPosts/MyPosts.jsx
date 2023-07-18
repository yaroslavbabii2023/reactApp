import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {
    let newPostElement = React.createRef();
    let onAddPost = (value) => {
         props.addPost(value.newPostText);
    }

    let postsElements = props.posts.map(p => <Post message={p.message} like={p.likeCount}/>)

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={"textarea"}/>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostText"})(AddNewPostForm);



export default MyPosts;