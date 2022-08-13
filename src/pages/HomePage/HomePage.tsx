import React from 'react'
import Header from '../../components/Header/Header'
import ImageList from '../../components/ImageList/ImageList'
import { useAppDispatch } from '../../store/hooks/hooks'

import s from './HomePage.module.scss'

function HomePage() {
    const dispatch = useAppDispatch()

    const onClick = () => {}
    return (
        <div className={s.homePage}>
            <Header />

            <ImageList />
        </div>
    )
}

export default HomePage
