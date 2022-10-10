import styles from './Modal.module.css'
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {hideModalAction, setPlayerNameAction} from "../../redux/gameReducer/actions";

export const Modal = () => {
    const dispatch = useDispatch()
    const {isShowModal} = useSelector(state => state.game)
    const [playerName, setPlayerName] = useState('Sergey')

    const handleSetName = () => {
        dispatch(setPlayerNameAction(playerName))
        dispatch(hideModalAction())
    }


    return <>
        {isShowModal &&
                <div className={styles.modal}>
                    <h3 className={styles.header}>Type your name</h3>
                    <input value={playerName} onChange={(e) => setPlayerName(e.target.value)} className={styles.input}/>
                    <button className={styles.button} disabled={!playerName} onClick={() => handleSetName()}>Ok</button>
                </div>
        }
    </>
}