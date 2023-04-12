import React, {ChangeEvent, useEffect, useState} from "react";

export type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatus: React.FC<ProfileStatusPropsType> = ({status, updateStatus}) => {

    const [value, setValue] = useState(status)
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        setValue(status)
    }, [status])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEditMode(false)
        updateStatus(value)
    }

    return <div>

        {editMode ?
            <div>
                <input type="text" value={value}
                       onChange={onChangeHandler}
                       onBlur={onBlurHandler}
                       autoFocus={true}/>
            </div>
            :
            <div>
                    <span onDoubleClick={() => {
                        setEditMode(true)
                    }}>{status || 'no status'}</span>
            </div>
        }

    </div>
}