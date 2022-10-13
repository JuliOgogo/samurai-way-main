import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

export type MyPostsPropsType = {}

const MyPosts = (props: MyPostsPropsType) => {

    const posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'It\'s my first post', likesCount: 54},
        {id: 3, message: 'I\'m learning React', likesCount: 3},
    ]

    const postsElements = posts.map(p => <Post message={p.message} likeCounter={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;