import React from 'react';
import './custom-button.styles.scss'

const SignButton = ({ children, inverted, ...otherProps }) => (
    <button className={`sign-button`}
        {...otherProps}>
        {children}
    </button>
)

export default SignButton 