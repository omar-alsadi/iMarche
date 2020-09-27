import React from 'react';
import './sign-in-and-sign-up.style.scss'

import { connect } from 'react-redux'

import SignIn from '../../sign-in/sign-in.component'
import SignUp from '../../sign-up/sign-up.component'

const signInAndSignUp = (errorExist) => {
    errorExist = false;
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
};

const mapStateToProps = ({ user: { errorExist } }) => ({
    errorExist
})

export default connect(mapStateToProps)(signInAndSignUp)