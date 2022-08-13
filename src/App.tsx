/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import userDataAPI from './api/userDataAPI'
import s from './App.module.scss'
import HomePage from './pages/HomePage/HomePage'
import { useAppDispatch } from './store/hooks/hooks'
import { setUser } from './store/slices/userSlice'

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        // Т.к. в задании не предполагается изменение или получение user'a,
        // то передается пустая строка вместо userId
        userDataAPI.getUserData('').then((data) => {
            dispatch(
                setUser({
                    userName: 'Ricardo Cooper',
                    images: [...data],
                })
            )
        })
    }, [])
    return (
        <div className={s.App}>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
    )
}

export default App
