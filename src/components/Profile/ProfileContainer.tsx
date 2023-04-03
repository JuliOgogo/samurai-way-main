import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {StateType, UserProfileType} from "../../redux/types";
import {getUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

export type ProfileContainerPropsType = {
    profile: UserProfileType
    getUserProfile: (userID: number) => void
}

class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        profile: state.profilePage.profile
    }
}

const WithUrlParamsContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlParamsContainerComponent);