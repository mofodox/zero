import React from 'react'
// import { FiMenu } from 'react-icons/fi'

import styles from './Navbar.module.css'

const Navbar = (props) => {
    return (
        <div className={styles.navbar}>
            <div className={styles.brand}>
                <h4>Zero</h4>
            </div>

            {/* <div className={styles.menu} onClick={props.onClick}>
                <FiMenu size={28} />
            </div> */}
        </div>
    )
}

export default Navbar
