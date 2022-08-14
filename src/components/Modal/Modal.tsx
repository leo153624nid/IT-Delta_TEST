/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { useAppSelector } from '../../store/hooks/hooks'
import s from './Modal.module.scss'

// interface ModalProps {
//     active: boolean
//     setActive: () => void
// }

function Modal({ active, setActive }) {
    const { imageData } = useAppSelector((state) => state.image)
    return (
        <div
            className={active ? `${s.modal} ${s.active}` : `${s.modal}`}
            onClick={() => setActive(false)}
        >
            <div
                className={active ? `${s.content} ${s.active}` : `${s.content}`}
                onClick={(e) => e.stopPropagation()}
            >
                111
            </div>
        </div>
    )
}

export default Modal
