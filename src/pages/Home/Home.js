import React from "react";
import styles from './Home.module.css'
import {useDispatch, useSelector} from "react-redux";
import {showModalAction} from "../../redux/gameReducer/actions";
import {useNavigate} from "react-router-dom";

export const Home = () => {
    const navigation = useNavigate()
    const {playerName} = useSelector(state => state.game)
    const dispatch = useDispatch()

    const handleStatGame = () => {
        dispatch(showModalAction())
    }
    const handleStartCoopGame = () => {
        navigation('/coopgame')
    }

    return <div className={styles.menuWrapper}>
        <h3 className={styles.header}>Memory Game</h3>
        <p className={styles.subtitle}>Hi {playerName}! Choose game mode</p>
        <button className={styles.menuItem} onClick={() => handleStatGame()}>
            Single game
        </button>
        <button className={styles.menuItem} onClick={() => handleStartCoopGame()}>
            Confrontation
        </button>
    </div>
}
