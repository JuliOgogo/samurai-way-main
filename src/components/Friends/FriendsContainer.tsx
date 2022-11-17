import React from "react";
import {Friends} from "./Friends";
import {StoreContext} from "../../StoreContext";

export type FriendsContainerPropsType = {}

export const FriendsContainer: React.FC<FriendsContainerPropsType> = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState().sidebar.friends
                return (
                    <Friends state={state}/>
                )
            }}
        </StoreContext.Consumer>
    )
}