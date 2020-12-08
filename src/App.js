import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './component/header/header.component'
import Footer from './component/footer/footer.component'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from './component/redux/user/user.selector'
import { selectPurchaseSuccess } from './component/redux/cart/cart.selectors'

import { checkUserSession } from './component/redux/user/user.action'

import './App.css';

import Spinner from './component/spinner/spinner.component';

import ErrorBoundary from './component/error-bundary/error-boundary.component'

const HomePage = lazy(() => import('./component/pages/homepage/homepage.component'));
const CatagoriesPage = lazy(() => import('./component/pages/catagories/catagories-component'));
const ShopPage = lazy(() => import('./component/pages/shop/shop-page.component'));
const CheckoutPage = lazy(() => import('./component/pages/checkout/checkout.component'));
const SignInAndSignUp = lazy(() => import('./component/pages/sign-in-and-sign-up/sign-in-and-sign-up.component'))

const App = ({ checkUserSession, currentUser, purchaseSuccess }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout'
              render={() => purchaseSuccess ? <Redirect to='/' />
                : <CheckoutPage />
              } />
            <Route exact path='/signin'
              render={() => currentUser ? <Redirect to='/' />
                : <SignInAndSignUp />
              } />
            <Route exact path='/catagories' component={CatagoriesPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer />
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  purchaseSuccess: selectPurchaseSuccess,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
