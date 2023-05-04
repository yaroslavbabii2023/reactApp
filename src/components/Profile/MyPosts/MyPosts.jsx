import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likeCount: 12},
        {id: 2, message: 'Its my first post', likeCount: 3},
    ]

    let postsElements = posts.map(p => <Post message={p.message} like={p.likeCount}/>)
    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add</button>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;