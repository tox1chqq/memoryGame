import {Layout} from "../../components/Layout/Layout";
import styles from './CoopGame.module.css'
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {startGameAction} from "../../redux/gameReducer/actions";
import {useDispatch} from "react-redux";

export const CoopGame = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleStartGame = () => {
        dispatch(startGameAction())
        navigate('/confrontation')
    }

    return <Layout>
            <h3 className={styles.header}>Cooperation settings</h3>
        <form className={styles.form}>
            <div className={styles.formItem}>
                <p className={styles.text}>Type your name</p>
                <input className={styles.input}/>
            </div>
            <div className={styles.formItem}>
                <p className={styles.text}>Room ID</p>
                <input className={styles.input}/>
            </div>
        </form>
        <div>
            <button className={styles.button} onClick={() => handleStartGame()}>Connect</button>
        </div>
    </Layout>
}