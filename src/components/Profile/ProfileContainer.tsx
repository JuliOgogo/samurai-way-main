import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {UserProfileType} from "../../redux/types";
import {getUserProfile} from "../../redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {AppRootStateType} from "../../redux/redux-store";

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: UserProfileType
    isAuth: boolean
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

        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

const WithUrlParamsContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlParamsContainerComponent);