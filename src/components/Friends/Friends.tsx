import React from "react";
import s from './Friends.module.css'
import {DialogType} from "../../redux/state";

export type FriendsPropsType = {
     state: DialogType[]
}

export const Friends = (props: FriendsPropsType) => {

    const friendsElements = props.state.map(f => {
        return <div className={s.friend}>
            <div className={s.avatar}></div>
            <div className={s.name}>{f.name}</div>
        </div>
    })

    return <div className={s.friendsWrapper}>
        {friendsElements}
    </div>
}