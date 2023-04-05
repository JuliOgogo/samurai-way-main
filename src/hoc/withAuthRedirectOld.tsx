import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";

type MapStateToPropsForRedirectType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: AppRootStateType): MapStateToPropsForRedirectType => {
    return {
        isAuth: state.auth.isAuth
    }
}

const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }

    const ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedRedirectComponent
}