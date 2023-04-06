import React, {ChangeEvent} from "react";

export type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    changeEditMode = (value: boolean) => {
        this.setState({editMode: value})
        // setState асинхронная ф-ция!
        this.props.updateStatus(this.state.status)
    }

    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    render() {
        return <div>

            {this.state.editMode ?
                <div>
                    <input type="text" value={this.state.status}
                           onChange={this.onChangeHandler}
                           onBlur={() => this.changeEditMode(false)}
                           autoFocus={true}/>
                </div>
                :
                <div>
                    <span onDoubleClick={() => {
                        this.changeEditMode(true)
                    }}>{this.props.status || 'no status'}</span>
                </div>
            }

        </div>
    }
}