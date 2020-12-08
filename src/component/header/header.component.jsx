import React from 'react';

import './header.styles.scss'

import { ReactComponent as Logo } from '../../assest/iMarche.svg'

import CartIcon from '../cart-icon/cart-icon.component'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { signOutStart } from '../redux/user/user.action'



const Header = ({ currentUser, hidden, signOutStart }) => (
    <div className='header'>
        <Link className='logo-container' to='/' >
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/catagories'>
                CATAGORIES
            </Link>
            {
                currentUser ?
                    (<div className='option' onClick={signOutStart}>SIGN OUT</div>)
                    :
                    (<Link className='option' to='/signin'>SIGN IN</Link>)
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />

        }

    </div>
)

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden

})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)