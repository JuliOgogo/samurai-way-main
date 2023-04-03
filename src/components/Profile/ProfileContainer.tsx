import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {UserProfileType} from "../../redux/types";
import {getUserProfile} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {AppRootStateType} from "../../redux/redux-store";

export type ProfileContainerPropsType = {
    profile: UserProfileType
    getUserProfile: (userID: number) => void
    isAuth: boolean
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

        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

const WithUrlParamsContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlParamsContainerComponent);