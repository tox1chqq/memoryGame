import {HIDE_MODAL, INCREMENT_COUNT, SET_PLAYER_NAME, SHOW_MODAL, START_GAME} from "../types";
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
    const cards = [...images,...images].sort(() => Math.random() - 0.5).map((card) => ({...card, id: Math.random()}) )

   return  {type: START_GAME, payload: {cards} }
}

export const incrementCountAction = () => {
    return { type: INCREMENT_COUNT}
}
