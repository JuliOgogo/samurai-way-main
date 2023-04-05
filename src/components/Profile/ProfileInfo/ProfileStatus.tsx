import React from "react";

export type ProfileStatusPropsType = {
    text: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false
    }

    changeEditMode = (value: boolean) => {
        this.setState({editMode: value})
        // setState асинхронная ф-ция!
    }

    render() {
        return <div>

            {this.state.editMode ?
                <div>
                    <input type="text" value={this.props.text}
                           onBlur={() => this.changeEditMode(false)}
                           autoFocus={true}/>
                </div>
                :
                <div>
                    <span onDoubleClick={() => {
                        this.changeEditMode(true)
                    }}>{this.props.text}</span>
                </div>
            }

        </div>
    }
}