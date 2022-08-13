/* eslint-disable no-alert */
/* eslint-disable no-console */
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

    // Получаем данные при загрузке страницы
    useEffect(() => {
        // Т.к. в задании не предполагается изменение или получение user'a,
        // то передается пустая строка вместо userId а пользователь задается хардкодом
        userDataAPI
            .getUserData('')
            .then((data) => {
                dispatch(
                    setUser({
                        userName: 'Ricardo Cooper',
                        images: [...data],
                    })
                )
            })
            .catch((error) => {
                console.log(error)
                alert('Данные не получены')
            })
    }, [dispatch])
    return (
        <div className={s.App}>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
    )
}

export default App
