import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppDispatch } from '../../store/hooks/hooks'
import { removeUser } from '../../store/slices/userSlice'
import s from './HomePage.module.scss'

function HomePage() {
    const dispatch = useAppDispatch()

    const onClick = () => {}
    return (
        <div>
            <h1>Welcome, {email}</h1>
            <div className={s.wrapBtn}>
                <button type="button" onClick={onClick} className={s.btn}>
                    Log out from {email}
                </button>
            </div>
        </div>
    )
}

export default HomePage
