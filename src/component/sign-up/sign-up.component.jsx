import React, { useState } from 'react';

import { connect } from 'react-redux'
import { signUpStart } from '../redux/user/user.action'

import FormInput from '../form-input/form-input.component'
import SignButton from '../custom-button/custom-button.sign';


import './sign-up.styles.scss'

const SignUp = ({ signUpStart }) => {

    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();



        if (password !== confirmPassword) {
            alert("The confirm password doesn't match the password");
            return;
        }

        signUpStart({ displayName, email, password })

    }

    const handleChange = event => {

        const { name, value } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value })
    }

    return (
        <div className="sign-up">
            <h1 className="title">I don't have an account !</h1>
            <p>Create new account with your email and password</p>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    name="displayName"
                    type="text"
                    value={displayName}
                    onChange={handleChange}
                    label="Display Name"
                    required
                />
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleChange}
                    label="Password"
                    required
                />
                <FormInput
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    required
                />
                <SignButton type="submit">SIGN UP</SignButton>
            </form>
        </div>
    )


}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);