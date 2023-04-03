import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authMe} from "../../redux/authReducer";
import {AppRootStateType} from "../../redux/redux-store";

export type HeaderContainerPropsType = {
    isAuth: boolean
    login: string
    authMe: () => void
}

class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.authMe()
    }

    render() {
        return <Header
            isAuth={this.props.isAuth}
            login={this.props.login}
        />;
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {authMe})(HeaderContainer)