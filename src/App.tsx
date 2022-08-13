/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import HomePage from './pages/HomePage/HomePage'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
    )
}

export default App
