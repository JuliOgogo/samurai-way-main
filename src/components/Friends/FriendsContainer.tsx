import React from "react";
import {Friends} from "./Friends";
import {connect} from "react-redux";
import {StateType} from "../../redux/types";

export type FriendsContainerPropsType = {}

const mapStateToProps = (state: StateType) => {
    return {
        state: state.sidebar.friends
    }
}

export const FriendsContainer: React.FC<FriendsContainerPropsType> = connect(mapStateToProps)(Friends)