/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import userDataAPI from '../../api/userDataAPI'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { clearImageData, postImageComment } from '../../store/slices/imgSlice'
import s from './Modal.module.scss'

interface ModalProps {
    active: boolean
    // eslint-disable-next-line no-unused-vars
    setActive: (active: boolean) => void
}

// Получение текущей даты в мс
export const getNowDateMS = () => {
    const now = new Date()
    return now.getTime()
}

function Modal({ active, setActive }: ModalProps) {
    const dispatch = useAppDispatch()
    const { imageData } = useAppSelector((state) => state.image)

    // Контролируемый инпут
    const [value, setValue] = useState('')
    const onChangeText = (e: { target: { value: string } }) => {
        setValue(e.target.value)
    }

    // Отправляем коммент
    const postComment = (imageId: number, text: string) => {
        const comment = {
            id: imageData.comments.length
                ? imageData.comments.at(-1).id + 1
                : 1,
            text,
            date: getNowDateMS(),
        }
        userDataAPI
            .postImageComment(imageId, comment)
            .then((data) => {
                console.dir(data)
            })
            .catch(() => {
                // Т.к. сервер не сохраняет данные и всегда получаем ошибку 400,
                // то здесь имитируется успешное добавление поста и сохраннение в state
                // console.dir(error)
                // alert('Данные не были отправлены')
                dispatch(
                    postImageComment({
                        imageData: {
                            id: imageData.id,
                            url: imageData.url,
                            comments: [comment],
                        },
                    })
                )
                setValue('')
            })
    }

    return imageData.id ? (
        // Если данные получены
        <div
            className={active ? `${s.modal} ${s.active}` : `${s.modal}`}
            onClick={() => {
                setActive(false)
                dispatch(clearImageData())
            }}
        >
            <div
                className={active ? `${s.content} ${s.active}` : `${s.content}`}
                onClick={(e) => e.stopPropagation()}
            >
                <img src={imageData.url} alt="full img" className={s.img} />

                <div className={s.comments}>
                    {imageData.comments.map((item) => (
                        <span key={item.id}>
                            <i>{item.text}</i>
                        </span>
                    ))}
                </div>

                <section className={s.section}>
                    <form>
                        <div className={s.field}>
                            <div className={s.fieldContent}>
                                <div className={s.label}>
                                    <span>Comment</span>
                                </div>
                                <div>
                                    <textarea
                                        className={s.textArea}
                                        autoFocus
                                        value={value}
                                        onChange={(e) => onChangeText(e)}
                                    />
                                </div>
                            </div>
                            <div className={s.helpText}>
                                <span>
                                    Write a few sentences about the photo.
                                </span>
                            </div>
                        </div>
                    </form>
                </section>

                <div className={s.btn}>
                    <span
                        className={s.btnText}
                        onClick={() => postComment(imageData.id, value)}
                    >
                        Save
                    </span>
                </div>
            </div>
        </div>
    ) : (
        // Если данные еще не получены
        <div
            className={active ? `${s.modal} ${s.active}` : `${s.modal}`}
            onClick={() => setActive(false)}
        >
            <div
                className={active ? `${s.content} ${s.active}` : `${s.content}`}
                onClick={(e) => e.stopPropagation()}
            >
                <span>LOADING...</span>
            </div>
        </div>
    )
}

export default Modal
