import React from "react";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { showModalAction } from "../../redux/gameReducer/actions";

export const Home = () => {
  const { playerName } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const handleStatGame = () => {
    dispatch(showModalAction());
  };

  return (
    <div className={styles.menuWrapper}>
      <h3 className={styles.header}>Memory Game</h3>
      <p className={styles.subtitle}>Hi {playerName}! Choose game mode</p>
      <button className={styles.menuItem} onClick={() => handleStatGame()}>
        Single game
      </button>
      <button className={styles.menuItem} disabled>
        Confrontation
      </button>
    </div>
  );
};
