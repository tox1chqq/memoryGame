import React, { useMemo} from 'react'
import styles from './Card.module.css'
import background from '../../assets/images/background.jpg'
import {useDispatch, useSelector} from "react-redux";
import {
    addToHistoryAction,
    setFirstPickAction,
    setSecondPickAction,
} from "../../redux/gameReducer/actions";

export const Card = ({card}) => {
    const {firstPick, secondPick} = useSelector(state => state.game);
    const dispatch = useDispatch();

    const showCardImg = useMemo(() => {
        return card.id === firstPick?.id || card.id === secondPick?.id || card.selected
    }, [firstPick, secondPick, card.selected])

    const handleClick = () => {
        dispatch(addToHistoryAction(card))
        if (firstPick) {
            dispatch(setSecondPickAction(card))
        } else {
            dispatch(setFirstPickAction(card))
        }
    }

    return <div className={styles.cardWrapper} onClick={() => handleClick()}>
        <img className={showCardImg ? styles.hide : styles.background} src={background} alt='Background'/>
        <img className={styles.img} src={card.src} alt='Image'/>
    </div>
}