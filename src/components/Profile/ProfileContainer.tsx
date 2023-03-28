import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StateType, UserProfileType} from "../../redux/types";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

export type ProfileContainerPropsType = {
    setUserProfile: (profile: UserProfileType) => void
    profile: UserProfileType
}

class ProfileContainer extends React.Component<any, ProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(res => {
            this.props.setUserProfile(res.data)
        })
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

export default connect(mapStateToProps, {setUserProfile})(WithUrlParamsContainerComponent);