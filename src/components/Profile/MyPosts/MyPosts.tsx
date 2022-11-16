import React, {RefObject} from 'react';
import s from './MyPosts.module.css';
import Post, {PostPropsType} from "./Post/Post";

export type MyPostsPropsType = {
    posts: PostPropsType[]
    newPostText: string
    addPost: () => void
    updateNewPost: (text: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({
                                                 posts,
                                                 newPostText,
                                                 addPost,
                                                 updateNewPost
                                             }) => {

    const postsElements = posts.map(p => <Post message={p.message} likesCounter={p.likesCounter}/>)
    const newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

    const onClickHandler = () => {
        addPost()
        // dispatch(addPostAC())
    }

    const onChangeHandler = () => {
        let text = newPostElement.current?.value;
        text && updateNewPost(text)
        // dispatch(updateNewPostAC(text ? text : ''))
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              placeholder={'enter your message'}
                              value={newPostText}
                              onChange={onChangeHandler}/>
                </div>
                <div>
                    <button onClick={onClickHandler}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;