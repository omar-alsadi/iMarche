import React from 'react';
import './custom-button.styles.scss'

const SignButton = ({ children, inverted, isDisabled, ...otherProps }) => (
    <button disabled={isDisabled ? true : null} className={` ${isDisabled ? 'disabled' : ''} sign-button`}
        {...otherProps}>
        {children}
    </button>
)

export default SignButton 