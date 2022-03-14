import React from 'react';
import { connect } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';

// Passed in from parent component or from mapStateToProps
const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
            // Redirect to the tweets page if the user is authenticated
                <Navigate to="/tweets" />
        )
    )} />
);

const Protected = ({ component: Component, loggedIn, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            loggedIn ? (
                <Component {...props} />
            ) : (
                // Redirect to the login page if the user is already authenticated
                    <Navigate to="/login" />
            )
        }
    />
);

// Use the isAuthenitcated slice of state to determine whether a user is logged in

const mapStateToProps = state => (
    { loggedIn: state.session.isAuthenticated }
);

export const AuthRoute = connect(mapStateToProps)(Auth);

export const ProtectedRoute = connect(mapStateToProps)(Protected);