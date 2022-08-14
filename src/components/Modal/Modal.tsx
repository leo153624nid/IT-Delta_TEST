/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { useAppSelector } from '../../store/hooks/hooks'
import s from './Modal.module.scss'

interface ModalProps {
    active: boolean
    // eslint-disable-next-line no-unused-vars
    setActive: (active: boolean) => void
}

function Modal({ active, setActive }: ModalProps) {
    const { imageData } = useAppSelector((state) => state.image)
    return imageData.id ? (
        // Если данные получены
        <div
            className={active ? `${s.modal} ${s.active}` : `${s.modal}`}
            onClick={() => setActive(false)}
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
                    <span className={s.btnText}>Save</span>
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
