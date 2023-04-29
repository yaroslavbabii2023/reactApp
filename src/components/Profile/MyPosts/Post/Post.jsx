import React from 'react';
import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://png.pngtree.com/element_our/png_detail/20181114/cartoon-santa-claus-illustration-png_239389.jpg"/>
                post 1
            <span>like</span>
        </div>
    )
}

export default Post;