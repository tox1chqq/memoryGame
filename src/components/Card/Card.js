import React, { useMemo } from "react";
import styles from "./Card.module.css";
import background from "../../assets/images/background.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  addToHistoryAction,
  setFirstPickAction,
  setSecondPickAction,
} from "../../redux/gameReducer/actions";

export const Card = ({ card }) => {
  const { firstPick, secondPick } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const showCardImg = useMemo(
    () =>
      card.id === firstPick?.id || card.id === secondPick?.id || card.selected,
    [firstPick, secondPick, card.selected]
  );

  const handleClick = () => {
    dispatch(addToHistoryAction(card));
    if (firstPick) {
      dispatch(setSecondPickAction(card));
    } else {
      dispatch(setFirstPickAction(card));
    }
  };

  return (
    <div className={styles.card}>
      <div
        className={showCardImg ? [styles.flipped] : ""}
        onClick={() => handleClick()}
      >
        <img className={styles.front} src={card.src} alt="Image" />
        <img className={styles.back} src={background} alt="Background" />
      </div>
    </div>
  );
};
