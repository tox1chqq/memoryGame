import React from 'react'
import styles from './Card.module.css'
import background from '../../assets/images/background.jpg'
import {useDispatch, useSelector} from "react-redux";

export const Card = ({src}) => {
    const {firstPick, secondPick} = useSelector(state => state.game);
    const dispatch = useDispatch();

    const handleClick = () => {
        firstPick ? 'setSecond' : 'setFirst'
    }




    return <div className={styles.cardWrapper}>
            <img className={styles.background} src={background} alt='Background'/>
            <img className={styles.img} src={src} alt='Image'/>
    </div>
}