import React from 'react';
import {addPostAC, updateNewPostAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {StoreType} from "../../../redux/redux-store";

export type MyPostsContainerPropsType = {
    store: StoreType
}

const MyPostsContainer: React.FC<MyPostsContainerPropsType> = ({
                                                                   store
                                                               }) => {

    const state = store.getState()

    const addPostOnClickHandler = () => {
        store.dispatch(addPostAC())
    }

    const updateNewPostOnChangeHandler = (text: string) => {
        store.dispatch(updateNewPostAC(text ? text : ''))
    }

    return <MyPosts posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                    addPost={addPostOnClickHandler}
                    updateNewPost={updateNewPostOnChangeHandler}/>
}

export default MyPostsContainer;