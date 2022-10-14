import styles from './GameField.module.css'
import {Card, Layout} from "../../components";
import { useSelector} from "react-redux";


export const GameField = () => {
    const { cards } = useSelector(state => state.game)

    return <Layout>
        <h3>Confrontation</h3>
            <div className={styles.wrapper}>
                <div>
                    <p className={styles.playerName}>PlayrtName</p>
                    <div className={styles.cardList}>
                        {cards.map(card => <Card key={card.id} card={card}/>)}</div>
                </div>
                <div>
                    <p className={styles.playerName}>PlayrtName</p>
                    <div className={styles.cardList}>
                        {cards.map(card => <Card key={card.id} card={card}/>)}</div>
                </div>
            </div>
    </Layout>
}