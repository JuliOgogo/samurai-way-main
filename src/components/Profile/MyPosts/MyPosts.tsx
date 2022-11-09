import React, {RefObject} from 'react';
import s from './MyPosts.module.css';
import Post, {PostPropsType} from "./Post/Post";
import {ActionType} from "../../../redux/state";
import {addPostAC, updateNewPostAC} from "../../../redux/profileReducer";

export type MyPostsPropsType = {
    posts: PostPropsType[]
    newPostText: string
    dispatch: (action: ActionType) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({posts, newPostText, dispatch}) => {

    const postsElements = posts.map(p => <Post message={p.message} likesCounter={p.likesCounter}/>)
    const newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

    const onClickHandler = () => {
        dispatch(addPostAC())
    }

    const onChangeHandler = () => {
        let text = newPostElement.current?.value;
        dispatch(updateNewPostAC(text ? text : ''))
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