import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {UserProfileType} from "../../redux/types";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AppRootStateType} from "../../redux/redux-store";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: UserProfileType
    status: string
    authorizedUserId: number | null
}

type MapDispatchToPropsType = {
    getUserProfile: (userID: number) => void
    getStatus: (userID: number) => void
    updateStatus: (status: string) => void
}

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId: number | string | null = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        if (userId) {
            this.props.getUserProfile(+userId)
            this.props.getStatus(+userId)
        } else {
            this.props.history.push('/login')
        }
    }

    render() {
        return <Profile {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}

        />
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    /*withAuthRedirect,*/
    withRouter
)(ProfileContainer)