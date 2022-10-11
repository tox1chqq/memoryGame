import {useDispatch, useSelector} from "react-redux";
import styles from  './Game.module.css'
import {Card, Layout} from "../../components";
import {useEffect} from "react";
import {resetPicksAction, setFinishGameAction, showCardAction} from "../../redux/gameReducer/actions";
import {useNavigate} from "react-router-dom";

export const Game = () => {
    const dispatch = useDispatch()
    const {cards, count, playerName, firstPick, secondPick} = useSelector(state => state.game)
    const navigate = useNavigate()

    useEffect(() => {
        if (firstPick && secondPick && firstPick.src === secondPick.src && firstPick.id !== secondPick.id) {
            dispatch(showCardAction(firstPick.id, secondPick.id))
        }
    },[firstPick,secondPick])


    useEffect(() => {
        if (firstPick && secondPick && firstPick.src !== secondPick.src) {
            setTimeout( () => dispatch(resetPicksAction()),300)
        }
    },[firstPick,secondPick])

    useEffect(() => {
        if (cards.every(card => card.selected)){
            dispatch(setFinishGameAction())
        }
    },[cards])

    useEffect(() => {
        if (cards.length < 1){
            navigate('/')
        }
    },[])

    return <Layout>
        <div className={styles.info}>
            <p className={styles.infoText}>Player name: {playerName}</p>
            <p  className={styles.infoText}>Current points: {count}</p>
        </div>
        <div className={styles.cardList}>
            {cards.map(card => <Card key={card.id} card={card}/>)}
        </div>
    </Layout>
}