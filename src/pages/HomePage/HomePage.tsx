/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import Header from '../../components/Header/Header'
import ImageList from '../../components/ImageList/ImageList'
import { useAppSelector } from '../../store/hooks/hooks'
import s from './HomePage.module.scss'

function HomePage() {
    const { userName, images } = useAppSelector((state) => state.user)

    return userName ? (
        <div className={s.homePage}>
            <Header userName={userName} />

            <ImageList images={images} />
        </div>
    ) : (
        <div className={s.homePage}>
            <div className={s.loading}>
                <span>LOADING...</span>
            </div>
        </div>
    )
}

export default HomePage
