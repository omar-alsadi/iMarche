import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './collections-overview.styles.scss'

import CollectionsPreview from '../collection-preview/collection-preview.component'

import { selectCollectionsForPreview } from '../redux/shop/shop.selector'

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections.map(({ id, ...collections }) => (
                <CollectionsPreview key={id} {...collections} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
