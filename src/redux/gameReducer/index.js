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

const initialValue = {
    isShowModal: false,
    playerName: '',
    cards:[],
    count: 0,
    firstPick: undefined,
    secondPick: undefined,
    history: [],
    isFinishGame: false
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
        case SET_FIRST_PICK:
            return {...state, firstPick: action.payload}
        case SET_SECOND_PICK:
            return {...state, secondPick: action.payload}
        case RESET_PICKS:
            return  {...state, firstPick: undefined, secondPick: undefined}
        case SHOW_CARD:
            return {...state, count: state.count + 5, firstPick: undefined, secondPick: undefined, cards: state.cards.map(card => card.id === action.payload.firstId || card.id === action.payload.secondId ? {...card, selected: true } : card)}
        case RESET_GAME:
            return {...initialValue}
        case SET_FINISH_GAME:
            return {...state,isFinishGame: true, isShowModal: true}
        case ADD_TO_HISTORY:
            return  {...state, history: [...state.history, {
                moveCount: state.history.length + 1,
                    selectedItem: action.payload,
                    count: state.count
                }]}
        default:
            return state
    }
}