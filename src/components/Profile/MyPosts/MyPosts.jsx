import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
         props.addPost(text)
        newPostElement.current.value = '';

    }

    let postsElements = props.state.posts.map(p => <Post message={p.message} like={p.likeCount}/>)
    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add</button>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;