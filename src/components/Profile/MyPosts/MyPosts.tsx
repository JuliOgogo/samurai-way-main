import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {PostType} from "../../../redux/types";
import {required, validateMaxLengthCreator} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

export type MyPostsPropsType = {
    posts: PostType[]
    addPost: (post: string) => void
}

const validateMaxLength = validateMaxLengthCreator(10)

const MyPosts: React.FC<MyPostsPropsType> = ({
                                                 posts,
                                                 addPost,
                                             }) => {

    const postsElements = posts.map(p => <Post message={p.message} likesCounter={p.likesCounter}/>)

    const onSubmit = (formData: AddPostFormPropsType) => {
        console.log(formData)
        addPost(formData.textMessage)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <ReduxAddPostForm onSubmit={onSubmit}/>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

type AddPostFormPropsType = {
    textMessage: string
}

const AddPostForm: React.FC<InjectedFormProps<AddPostFormPropsType>> = ({handleSubmit}) => {
    return <form action="" onSubmit={handleSubmit}>
        <div>
            <Field placeholder={'enter your message'}
                   name={'textMessage'}
                   component={Textarea}
                   validate={[required, validateMaxLength]}
            />
        </div>
        <div>
            <button>Add Post</button>
        </div>
    </form>
}

const ReduxAddPostForm = reduxForm<AddPostFormPropsType>({form: 'addPostForm'})(AddPostForm)

export default MyPosts;