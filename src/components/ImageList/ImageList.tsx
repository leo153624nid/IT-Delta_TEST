/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import s from './ImageList.module.scss'
import { Image } from '../../store/slices/userSlice'
import Card from '../Card/Card'
import userDataAPI from '../../api/userDataAPI'

interface ImageListProps {
    images: Image[]
}

function ImageList({ images }: ImageListProps) {
    const getImgData = async (imageId: number) => {
        try {
            const data = await userDataAPI.getImageData(imageId)
            console.dir(data)
        } catch (error) {
            console.log(error)
            alert('Данные не получены')
        }
    }

    // Создаем массив карточек-фотографий
    const imagesList = images.map((item) => (
        <div key={item.id} className={s.cell}>
            <Card url={item.url} id={item.id} getImgData={getImgData} />
        </div>
    ))
    return <div className={s.imageList}>{imagesList}</div>
}

export default ImageList
