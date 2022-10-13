import React from 'react';
import s from './MyPosts.module.css';
import Post, {PostPropsType} from "./Post/Post";

export type MyPostsPropsType = {
    posts: PostPropsType[]
}

const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map(p => <Post message={p.message} likesCounter={p.likesCounter}/>)

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