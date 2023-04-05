import React from "react";

export type ProfileStatusPropsType = {
    text: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: true
    }

    render() {
        return <div>

            {this.state.editMode ?
                <div>
                    <input type="text" value={this.props.text}/>
                </div>
                :
                <div>
                    <span>{this.props.text}</span>
                </div>
            }
        </div>
    }
}