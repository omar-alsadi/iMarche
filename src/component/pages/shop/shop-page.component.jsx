import React, { useEffect, lazy, Suspense } from 'react';
import './shop-page.style.scss'

import { connect } from 'react-redux'

import { Route } from 'react-router-dom'

import { fetchingCollectionStart } from '../../redux/shop/shop.action'

import Spinner from '../../spinner/spinner.component'

const CollectionsOverviewContainer = lazy(() => import('../../collections-overview/collections-overview.container'));
const CollectionPageContainer = lazy(() => import('../collection/collection.container'))


const ShopPage = ({ fetchingCollectionStart, match }) => {

    useEffect(() => {
        fetchingCollectionStart()
    }, [fetchingCollectionStart])

    return (
        <div className='shop-page'>

            <Suspense fallback={<Spinner />}>

                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />

                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />

            </Suspense>
        </div>
    )

}


const mapDispatchToProps = dispatch => ({
    fetchingCollectionStart: () => dispatch(fetchingCollectionStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)