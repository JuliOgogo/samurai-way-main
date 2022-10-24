import React, {RefObject} from 'react';
import s from './MyPosts.module.css';
import Post, {PostPropsType} from "./Post/Post";

export type MyPostsPropsType = {
    posts: PostPropsType[]
    addPost: (post: any) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map(p => <Post message={p.message} likesCounter={p.likesCounter}/>)
    const newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

    const addPost = () => {
        const text = newPostElement.current?.value
        props.addPost(text)
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;