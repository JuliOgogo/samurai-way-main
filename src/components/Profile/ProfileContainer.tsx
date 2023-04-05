import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {UserProfileType} from "../../redux/types";
import {getUserProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AppRootStateType} from "../../redux/redux-store";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: UserProfileType
}

type MapDispatchToPropsType = {
    getUserProfile: (userID: number) => void
}

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(+userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    /*withAuthRedirect,*/
    withRouter
)(ProfileContainer)