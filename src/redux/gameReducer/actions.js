import {
    ADD_TO_HISTORY,
    HIDE_MODAL,
    INCREMENT_COUNT, RESET_GAME, RESET_PICKS, SET_FINISH_GAME,
    SET_FIRST_PICK,
    SET_PLAYER_NAME,
    SET_SECOND_PICK, SHOW_CARD,
    SHOW_MODAL,
    START_GAME
} from "../types";
import {images} from "../../contants";

export const showModalAction = () => {
    return {type: SHOW_MODAL}
}

export const hideModalAction = () => {
    return {type: HIDE_MODAL}
}

export const setPlayerNameAction = (name) => {
    return {type: SET_PLAYER_NAME, payload: {name}}
}

export const startGameAction = () => {
    const cards = [...images,...images].sort(() => Math.random() - 0.5).map((card) => ({...card, id: Math.random(), selected: false}) )

   return  {type: START_GAME, payload: {cards} }
}

export const setFirstPickAction = (card) => {
    return {type: SET_FIRST_PICK, payload: card}
}

export const setSecondPickAction = (card) => {
    return {type: SET_SECOND_PICK, payload: card}
}

export const showCardAction = (firstId, secondId) => {
    return {type: SHOW_CARD, payload: {firstId,secondId}}
}

export const resetPicksAction = () => {
    return {type: RESET_PICKS}
}

export const incrementCountAction = () => {
    return { type: INCREMENT_COUNT}
}

export const addToHistoryAction = (info) => {
    return { type : ADD_TO_HISTORY, payload: info}
}

export const setFinishGameAction = () => {
    return { type: SET_FINISH_GAME}
}

export const resetGameAction = () => {
    return {type: RESET_GAME}
}
