import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectDirectorySections } from '../redux/directory/directory.selector'

const Directory = ({ sections }) => (
    <div className='directory-menu'>
        {/* {this.state.sections.map(({ title, imageUrl, id, size , linkUrl }) => (
            <MenuItem key={id} title={title} size={size} imageUrl={imageUrl} linkUrl={linkUrl} />
        ))} */}
        {sections.map(({ id, ...Section }) => (
            <MenuItem key={id} {...Section} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)