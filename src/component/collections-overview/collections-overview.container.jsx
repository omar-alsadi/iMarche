import { connect } from 'react-redux'
import { compose } from 'redux'

import WithSpinner from '../spinner/with-spinner.component'

import CollectionsOverview from './collections-overview.component'
import { selectIsCollectionFetching } from '../redux/shop/shop.selector'


import { createStructuredSelector } from 'reselect'


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(connect(mapStateToProps), WithSpinner)
    (CollectionsOverview)

export default CollectionsOverviewContainer