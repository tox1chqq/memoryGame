import React from 'react'
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Game, Home, Results} from "./pages";
import {Modal} from "./components";
import {useSelector} from "react-redux";
import io from 'socket.io-client'
import {CoopGame} from "./pages/CoopGame/CoopGame";
import {GameField} from "./pages/GameField/GameField";


const socket = io.connect('http://localhost:9999')

function App() {
    const state = useSelector(state => state.game)

    const sendMessage = () => {
        socket.emit()
    }

    sendMessage()
    return <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/settings' element={<Results/>}/>
        <Route path='/coopgame' element={<CoopGame/>}/>
        <Route path='/confrontation' element={<GameField/>}/>
    </Routes>
        <Modal/>
    </>
}

export default App;
