import React from 'react';
import './collection-preivew.style.scss'
import CollectionItem from '../collection-item/collection-item.component'
import { withRouter } from 'react-router-dom';

const CollectionsPreview = ({ title, items, history, match, routeName }) => (
    <div className='collection-preview'>
        <div className='collection-header'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='show-more' onClick={() => history.push(`${match.path}/${routeName}`)}>show more &rarr;</span>
        </div>
        <div className='preview'>
            {items
                .filter((item, index) => index < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </div>
    </div>
)

export default withRouter(CollectionsPreview)