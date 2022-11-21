import React from 'react';
import {addPostAC, updateNewPostAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/types";
import {AppDispatchType} from "../../../redux/redux-store";

export type MyPostsContainerPropsType = {}

const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        addPost: () => dispatch(addPostAC()),
        updateNewPost: (text: string) => dispatch(updateNewPostAC(text))
    }
}

export const MyPostsContainer: React.FC<MyPostsContainerPropsType> = connect(mapStateToProps, mapDispatchToProps)(MyPosts)