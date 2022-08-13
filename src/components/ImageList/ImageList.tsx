/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import s from './ImageList.module.scss'
import { Image } from '../../store/slices/userSlice'
import Card from '../Card/Card'

interface ImageListProps {
    images: Image[]
}

function ImageList({ images }: ImageListProps) {
    const imagesList = images.map((item) => (
        <li key={item.id}>
            <Card url={item.url} id={item.id} />
        </li>
    ))
    return (
        <div className={s.imageList}>
            <ul>{imagesList}</ul>
        </div>
    )
}

export default ImageList
