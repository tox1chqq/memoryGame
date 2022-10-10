import React from 'react'
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Game, Home, Settings} from "./pages";

function App() {
    return <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/settings' element={<Settings/>}/>
    </Routes>
}

export default App;
