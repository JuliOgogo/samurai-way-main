import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    const postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'It\'s my first post', likesCount: 54},
        {id: 3, message: 'I\'m learning React', likesCount: 3},
    ]

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
                <Post message={postsData[0].message} likeCounter={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likeCounter={postsData[1].likesCount}/>
                <Post message={postsData[2].message} likeCounter={postsData[2].likesCount}/>
            </div>
        </div>
    );
}

export default MyPosts;