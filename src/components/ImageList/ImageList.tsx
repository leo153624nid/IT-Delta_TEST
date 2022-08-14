/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react'
import s from './ImageList.module.scss'
import { Image } from '../../store/slices/userSlice'
import Card from '../Card/Card'
import userDataAPI from '../../api/userDataAPI'
import { useAppDispatch } from '../../store/hooks/hooks'
import { setImageData } from '../../store/slices/imgSlice'
import Modal from '../Modal/Modal'

interface ImageListProps {
    images: Image[]
}

function ImageList({ images }: ImageListProps) {
    const dispatch = useAppDispatch()
    const [modalActive, setModalActive] = useState(false)

    // Получаем данные выбранной фотографии и открываем модальное окно
    const getImgData = async (imageId: number) => {
        try {
            const data = await userDataAPI.getImageData(imageId)

            dispatch(
                setImageData({
                    imageData: {
                        id: data.id,
                        url: data.url,
                        comments: [...data.comments],
                    },
                })
            )

            setModalActive(true)
        } catch (error) {
            console.log(error)
            alert('Данные не получены')
        }
    }

    // Создаем массив карточек-фотографий
    const imagesList = images.map((item) => (
        <div
            key={item.id}
            className={s.cell}
            onClick={() => getImgData(item.id)}
        >
            <Card url={item.url} id={item.id} />
        </div>
    ))
    return (
        <div className={s.imageList}>
            {imagesList}
            <Modal active={modalActive} setActive={setModalActive} />
        </div>
    )
}

export default ImageList
