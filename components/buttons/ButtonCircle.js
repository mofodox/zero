import React from 'react'
import { FiPlay, FiPause } from 'react-icons/fi'

import styles from './ButtonCircle.module.css'

const ButtonCircle = (props) => {
    return (
        <button className={styles.btnCircle} onClick={props.onClick} disabled={props.isActive || props.sticks >= 20}>
            { props.isActive ? (
                <FiPause size={64} color={"#D9D9D9"} />
            ) : (
                <FiPlay size={64} color={"#2e3131"} />
            ) }
        </button>
    )
}

export default ButtonCircle
