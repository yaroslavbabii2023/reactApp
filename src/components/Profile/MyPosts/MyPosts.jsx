import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    let newPostElement = React.createRef();
    let onAddPost = () => {
         props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    let postsElements = props.posts.map(p => <Post message={p.message} like={p.likeCount}/>)
    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add</button>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;