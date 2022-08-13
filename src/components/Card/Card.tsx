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
            <img src={url} alt="" />
            <span>id: {id}</span>
        </div>
    )
}

export default Card
