import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
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
                <Post like='1'/>
            </div>
        </div>
    )
}

export default MyPosts;