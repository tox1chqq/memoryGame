import React from 'react'
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Game, Home, Settings} from "./pages";
import {Modal} from "./components/Modal/Modal";
import {useSelector} from "react-redux";

function App() {
    const state = useSelector(state => state.game)

    console.log(state)


    return <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/settings' element={<Settings/>}/>
    </Routes>
        <Modal/>
    </>
}

export default App;
