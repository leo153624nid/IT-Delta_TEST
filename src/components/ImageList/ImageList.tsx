/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import s from './ImageList.module.scss'
import { Image } from '../../store/slices/userSlice'

interface ImageListProps {
    images: Image[]
}

function ImageList({ images }: ImageListProps) {
    const imagesList = images.map((item) => (
        <li key={item.id}>
            <img src={item.url} alt="" />
        </li>
    ))
    return (
        <div className={s.imageList}>
            <ul>{imagesList}</ul>
        </div>
    )
}

export default ImageList
