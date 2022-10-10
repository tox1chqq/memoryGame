import {useSelector} from "react-redux";
import {Card} from "../../components/Card/Card";
import styles from  './Game.module.css'
import {Layout} from "../../components/Layout/Layout";

export const Game = () => {
    const {cards, count, playerName} = useSelector(state => state.game)


    return <Layout>
        <div className={styles.info}>
            <p className={styles.infoText}>Player name: {playerName}</p>
            <p  className={styles.infoText}>Current points: {count}</p>
        </div>
        <div className={styles.cardList}>
            {cards.map(card => <Card src={card.src} key={card.id}/>)}
        </div>
    </Layout>
}