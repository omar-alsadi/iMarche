import React from 'react';

import './homepage.style.scss'

import CatagoriesPage from './../catagories/catagories-component'

const HomePage = () => (
    <div className='section'>
        <div className='section__banner section__banner-1'>
            <div className='section-text side-right'>
                <h2 className='title'>Our Bakery</h2>
                <p>are soft, slightly crispy and freshly homemade. They are perfect for breakfast , lunch and ready to be served.
                We offer several varieties of croissants: thyme croissant,
                    cheese croissant, plain croissant or chocolate croissant, cakes , pizza and more.</p>
            </div>
        </div>
        <div className='section__banner section__banner-2'>
            <div className='section-text side-left'>
                <h2 className='title'>From the Farm to You</h2>
                <p>fruits and vegetables department is full of exotic quality products, all locally sourced and imported,
                in addition to the fruits and vegetables found in traditional grocery stores.
                    The difference is our quality and freshness at the best price</p>
            </div>
        </div>

        <div className='section__banner section__banner-3'><span>100% Canadian Beef</span></div>

        <div className='catagories-title'>CATAGORIES</div>
        <CatagoriesPage />

        <div className='details-wrapper'>
            <div className='details-content'>
                <div className='logo-content logo-content-1' />
                <div className='text-content'>
                    Dairy Products and Meats are 100% local and natural
                </div>
            </div>
            <div className='details-content'>
                <div className='logo-content logo-content-2' />
                <div className='text-content'>100% Canadian Products</div>
            </div>
        </div>
        <div className='social-wrapper'>
            <h2 className='social-title'>Follow us</h2>
            <div className='social-links'>
                <a href='#' className='social-link'>
                    <img src='https://dittytv.com/wp-content/uploads/2015/05/Facebook-Logo-PNG-300x300.png' alt='facebook' />Facebook
            </a>
                <a href='#' className='social-link'>
                    <img src='https://i1.wp.com/ktabs.ca/wp-content/uploads/2019/02/twitter-logo-png-images-22.png?fit=400%2C325' alt='twitter' />Twitter
            </a>
                <a href='#' className='social-link'>
                    <img src='https://img.pngio.com/instagram-logo-png-free-transparent-png-logos-instagram-logo-transparent-background-641_641.png' alt='instagram' />Instagram
            </a>
            </div>

        </div>
    </div>
)

export default HomePage