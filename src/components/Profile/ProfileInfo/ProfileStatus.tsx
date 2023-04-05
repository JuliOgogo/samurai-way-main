import React from "react";

export type ProfileStatusPropsType = {
    text: string
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {
    return <div>
        <div>
            <span>{props.text}</span>
        </div>
        <div>
            <input type="text" value={props.text}/>
        </div>
    </div>
}