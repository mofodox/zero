import React from 'react'

import SEO from '../seo/SEO'
import Navbar from '../navigation/Navbar'

import styles from './Layout.module.css'

const Layout = (props) => {
    return (
        <>
            <SEO pageTitle={props.pageTitle}/>

            <Navbar 
                onClick={() => console.log('click')}
            />

            <div className={styles.content}>
                {props.children}
            </div>
        </>
    )
}

export default Layout
