import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './component/header/header.component'
import Footer from './component/footer/footer.component'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCurrentUser, selectErrorExist } from './component/redux/user/user.selector'
import { selectPurchaseSuccess } from './component/redux/cart/cart.selectors'

import { checkUserSession } from './component/redux/user/user.action'

import './App.css';

import Spinner from './component/spinner/spinner.component';

// ErrorBoundary helps to catch the error if happend in ever component and rendering the error component 
// on the page , it 
import ErrorBoundary from './component/error-bundary/error-boundary.component'

// lazy helps to makes chunks download separetly when loading page

const HomePage = lazy(() => import('./component/pages/homepage/homepage-component'));
const ShopPage = lazy(() => import('./component/pages/shop/shop-page.component'));
const CheckoutPage = lazy(() => import('./component/pages/checkout/checkout.component'));
const AboutPage = lazy(() => import('./component/pages/about/about.component'));
const SignInAndSignUp = lazy(() => import('./component/pages/sign-in-and-sign-up/sign-in-and-sign-up.component'))

const App = ({ checkUserSession, currentUser, errorExist, purchaseSuccess }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  console.log(purchaseSuccess);
  console.log(errorExist);
  console.log(currentUser)

  return (
    <div>
      <Header />
      <Switch>
        <ErrorBoundary>
          {/* Suspense allows to wrap any part application that be rendering asyncronous components like lazy in Homepage */}
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            {/* <Route exact path='/checkout' component={CheckoutPage} /> */}
            <Route exact path='/checkout'
              render={() => purchaseSuccess ? <Redirect to='/' />
                : <CheckoutPage />
              } />
            <Route exact path='/signin'
              render={() => currentUser ? <Redirect to='/' />
                : <SignInAndSignUp />
              } />
            <Route exact path='/about' component={AboutPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer />
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  errorExist: selectErrorExist,
  purchaseSuccess: selectPurchaseSuccess,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
