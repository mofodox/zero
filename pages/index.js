import {useState} from 'react'
import CountdownTimer from "react-component-countdown-timer";

import Layout from '../components/layout/Layout'
import ButtonCircle from '../components/buttons/ButtonCircle'

import ui from '../styles/uikit.module.css'
import styles from './IndexPage.module.css'

const IndexPage = () => {
    const [sticksPerDay, setSticksPerDay] = useState(0)
    const [isTimerStarted, setIsTimerStarted] = useState(false)

    const playButtonClicked = () => {
        setIsTimerStarted(true)
        setSticksPerDay( sticksPerDay + 1 )
    }

    const onTimerEnd = () => {
        setIsTimerStarted(false)

        if (sticksPerDay === 20) {
            alert("You have maxed out your smoking session! Wait for tomorrow")
        }
    }

    return (
        <Layout pageTitle="Home">
            <div className={ui.column}>
                <section className={styles.infoText}>
                    <p>You had <span className={styles.infoTextNumber}>{`${sticksPerDay}`} out of 20</span> sticks today.</p>
                </section>

                <section className={styles.buttonPlacement}>
                    <ButtonCircle 
                        onClick={() => playButtonClicked()}
                        isActive={isTimerStarted}
                        sticks={sticksPerDay}
                    />
                </section>

                <section className={styles.status}>
                    <p className={styles.statusText}>
                        { isTimerStarted ? (
                            <CountdownTimer 
                                count={10}
                                onEnd={() => onTimerEnd()}
                            />
                        ) : (
                            "Stopped"
                        ) }
                    </p>
                    <p className={styles.statusGreyText}>
                        { isTimerStarted ? (
                            "You are currently having your smoking session."
                        ) : (
                            "You can have your smoking session now."
                        ) }
                    </p>
                </section>
            </div>
        </Layout>
    )
}

export default IndexPage
