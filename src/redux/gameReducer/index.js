import {HIDE_MODAL, INCREMENT_COUNT, SET_PLAYER_NAME, SHOW_MODAL, START_GAME} from "../types";

const initialValue = {
    isShowModal: true,
    playerName: '',
    cards:[],
    count: 0,
    firstPick: null,
    secondPick: null
}




export const gameReducer = ( state = initialValue, action) => {
    switch (action.type){
        case SHOW_MODAL:
            return {...state, isShowModal: true}
        case HIDE_MODAL:
            return  {...state, isShowModal: false}
        case SET_PLAYER_NAME:
            return  {...state, playerName: action.payload.name}
        case START_GAME:
            return {...state, cards: action.payload.cards}
        case INCREMENT_COUNT:
            return  {...state, count: state.count + 1}
        default:
            return state
    }
}