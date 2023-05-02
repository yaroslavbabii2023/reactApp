import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <textarea></textarea>
            <button>Add</button>
            <div className={s.post}>
                <Post like='1'/>
            </div>
        </div>
    )
}

export default MyPosts;