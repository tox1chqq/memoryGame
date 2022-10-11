import styles from "./Modal.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  hideModalAction,
  resetGameAction,
  setPlayerNameAction,
  startGameAction,
} from "../../redux/gameReducer/actions";
import { useNavigate } from "react-router-dom";

export const Modal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isShowModal, isFinishGame } = useSelector((state) => state.game);
  const [playerName, setPlayerName] = useState("");

  const handleSetName = () => {
    dispatch(setPlayerNameAction(playerName));
    dispatch(hideModalAction());
    dispatch(startGameAction());
    navigate("/game");
  };

  const handleShowResults = () => {
    navigate("/settings");
    dispatch(hideModalAction());
  };

  const handleResetGame = () => {
    navigate("/");
    dispatch(resetGameAction());
  };

  return (
    <>
      {isShowModal && (
        <div className={styles.modal}>
          <h3 className={styles.header}>
            {isFinishGame ? "Congratulations!" : "Type your name"}
          </h3>
          {isFinishGame ? (
            <div className={styles.buttonContainer}>
              <button
                onClick={() => handleShowResults()}
                className={styles.button}
              >
                Show results
              </button>
              <button
                onClick={() => handleResetGame()}
                className={styles.button}
              >
                Reset game
              </button>
            </div>
          ) : (
            <>
              <input
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className={styles.input}
              />
              <button
                className={styles.button}
                disabled={!playerName}
                onClick={() => handleSetName()}
              >
                Ok
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};
