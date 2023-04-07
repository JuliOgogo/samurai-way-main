import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {PostType} from "../../../redux/types";

export type MyPostsPropsType = {
    posts: PostType[]
    addPost: (post: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({
                                                 posts,
                                                 addPost,
                                             }) => {

    const postsElements = posts.map(p => <Post message={p.message} likesCounter={p.likesCounter}/>)

    const onSubmit = (formData: MyPostsFormPropsType) => {
        console.log(formData)
        addPost(formData.textMessage)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <ReduxAddPostPostsForm onSubmit={onSubmit}/>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

type MyPostsFormPropsType = {
    textMessage: string
}

const AddPostFormForm: React.FC<InjectedFormProps<MyPostsFormPropsType>> = ({handleSubmit}) => {
    return <form action="" onSubmit={handleSubmit}>
        <div>
            <Field placeholder={'enter your message'} name={'textMessage'} component={'textarea'}/>
        </div>
        <div>
            <button>Add Post</button>
        </div>
    </form>
}

const ReduxAddPostPostsForm = reduxForm<MyPostsFormPropsType>({form: 'addPostForm'})(AddPostFormForm)

export default MyPosts;