/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import s from './Header.module.scss'
import banner from '../../img/banner.svg'
import avatar from '../../img/avatar.svg'

// interface FormProps {
//     title: string
//     emailMemo: string
//     passMemo: string
//     // eslint-disable-next-line no-unused-vars
//     handleClick: (email: string, pass: string, memo: boolean) => void
// }

function Header({ userName }) {
    return (
        <header>
            <div className={s.banner}>
                <img src={banner} alt="banner" />
            </div>

            <div className={s.user}>
                <div className={s.avatar}>
                    <img src={avatar} alt="avatar" />
                </div>

                <div className={s.userData}>
                    <div className={s.userName}>{userName}</div>

                    <div className={s.userButtons}>
                        <button type="button" className={s.message}>
                            Message
                        </button>
                        <button type="button" className={s.call}>
                            Call
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
