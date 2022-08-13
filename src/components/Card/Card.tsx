/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import s from './Card.module.scss'

interface CardProps {
    url: string
    id: number
    // eslint-disable-next-line no-unused-vars
    getImgData: (imageId: number) => Promise<void>
}

function Card({ url, id, getImgData }: CardProps) {
    return (
        <div
            className={s.card}
            onClick={() => {
                getImgData(id)
            }}
        >
            <img src={url} alt="" className={s.img} />

            <div className={s.details}>
                <div className={s.tittle}>id: {id}</div>

                <div className={s.supportText}>none</div>
            </div>
        </div>
    )
}

export default Card
