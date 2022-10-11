import {Layout} from "../../components/Layout/Layout";
import styles from './CoopGame.module.css'

export const CoopGame = () => {
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
            <button className={styles.button}>Connect</button>
        </div>
    </Layout>
}