import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validator/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


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

const maxLength10 = maxLengthCreator(10)
const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea}
                       placeholder="Post Message"
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostText"})(AddNewPostForm);



export default MyPosts;