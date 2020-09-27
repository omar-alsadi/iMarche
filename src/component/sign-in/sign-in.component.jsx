import React, { useState } from 'react';
import { connect } from 'react-redux'

import FormInput from '../../component/form-input/form-input.component'
import CustomButton from '../../component/custom-button/custom-button.component'
import SignButton from '../../component/custom-button/custom-button.sign'

import { googleSignInStart, emailSignInStart } from '../redux/user/user.action'


import './sign-in.style.scss'

const SignIn = ({ errorExist, emailSignInStart, googleSignInStart }) => {


    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: ''
    })

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStart(email, password);

    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserCredentials({
            ...userCredentials,
            [name]: value
        })
    }

    return (
        <div className="sign-in">
            <h1 className="title">I have already an account</h1>
            <p>Sign in with your Email and Password</p>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    label="email"
                    required
                    handleChange={handleChange}
                />
                {/* <label>Email:</label> */}
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    label="password"
                    required
                    handleChange={handleChange}
                />
                {/* <label>Password:</label> */}
                {errorExist ? <div className='error-text'>The email or password is incorrect</div> : null}
                <div className="buttons">
                    <SignButton type='submit'>Sign In</SignButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleButton>Sign In with Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = ({ user: { errorExist } }) => ({
    errorExist
})

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)