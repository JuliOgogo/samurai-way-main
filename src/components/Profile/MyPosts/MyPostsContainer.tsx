import React from 'react';
import {addPostAC, updateNewPostAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

export type MyPostsContainerPropsType = {}

const MyPostsContainer: React.FC<MyPostsContainerPropsType> = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {

                const state = store.getState().profilePage

                const addPostOnClickHandler = () => {
                    store.dispatch(addPostAC())
                }

                const updateNewPostOnChangeHandler = (text: string) => {
                    store.dispatch(updateNewPostAC(text))
                }

                return <MyPosts posts={state.posts}
                                newPostText={state.newPostText}
                                addPost={addPostOnClickHandler}
                                updateNewPost={updateNewPostOnChangeHandler}/>
            }}
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;