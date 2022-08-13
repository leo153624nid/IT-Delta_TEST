/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import s from './Card.module.scss'

interface CardProps {
    url: string
    id: number
}

function Card({ url, id }: CardProps) {
    return (
        <div className={s.card}>
            <img src={url} alt="" className={s.img} />

            <div className={s.details}>
                <div className={s.tittle}>id: {id}</div>

                <div className={s.supportText}>none</div>
            </div>
        </div>
    )
}

export default Card
