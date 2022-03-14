import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Routes } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import TweetsContainer from './tweets/tweets_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
import TweetComposeContainer from './tweets/tweet_compose_container';

const App = () => (
    <div>
        <NavBarContainer />
        <Routes>
            <AuthRoute exact path="/" element={<MainPage/>} />
            <AuthRoute exact path="/login" element={<LoginFormContainer/>} />
            <AuthRoute exact path="/signup" element={<SignupFormContainer/>} />

            <ProtectedRoute exact path="/tweets" elment={<TweetsContainer/>} />
            <ProtectedRoute exact path="/profile" element={<ProfileContainer/>} />
            <ProtectedRoute exact path="/new_tweet" element={<TweetComposeContainer/>} />
        </Routes>
    </div>
);

export default App;