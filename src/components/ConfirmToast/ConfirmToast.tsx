import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import classnames from 'classnames-creator'
import s from './ConfirmToast.module.scss'

interface Props {
    asModal?: boolean,
    children: React.ReactNode,
    childrenClassName?: string,
    showCloseIcon?: boolean,
    customCancel?: string,
    customConfirm?: string,
    customFunction: Function,
    message?: string,
    position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'
    theme?: 'light' | 'dark' | 'snow' | 'lilac'
}

export default function ConfirmToast({
    asModal = false,
    children,
    childrenClassName,
    showCloseIcon = true,
    customCancel = 'Cancel',
    customConfirm = 'Ok',
    customFunction,
    message = 'Do you want to continue?',
    position = 'bottom-right',
    theme = 'light',
    ...props }: Props) {

    function Wrapper({ asModal, children }: { asModal: boolean, children: React.ReactNode }): JSX.Element {
        if (asModal) {
            return (
                <div
                    data-out={true}
                    onClick={clickOutOfModal}
                    className={s.modal}
                >{children}</div>
            )
        }
        return (
            <>
                {children}
            </>
        )
    }

    const [showConfirmToast, setShowConfirmToast] = useState(false)

    const closeModal = (e: React.MouseEvent): void => {
        e.stopPropagation()
        setShowConfirmToast(false)
    }

    const clickOutOfModal = (e: React.MouseEvent): void => {
        const target = e.target as HTMLElement;
        if (target.getAttribute('data-out')) {
            closeModal(e)
        }
    }

    const classes = classnames(
        s.container,
        {
            [s[position]]: (asModal ? false : position), //if asModal, don't return 'position' class
            [s['modal-content']]: asModal,
        }
    )

    return (

        <div
            onClick={() => setShowConfirmToast(true)}
            className={classnames(
                s[`${theme}_theme`],
                childrenClassName
            )
            }
        >
            {showConfirmToast &&
                <Wrapper asModal={asModal}>
                    <div
                        className={classes}
                    >
                        <div className={s.title_wrapper}>
                            <div className={s.title}>
                                {message}
                            </div>
                            {
                                showCloseIcon &&
                                <CgClose
                                    aria-label='close modal'
                                    className={s.close}
                                    onClick={(e) => { closeModal(e) }}
                                />
                            }
                        </div>

                        <div className={s.buttons_container}>
                            <button
                                className={`${s.button} ${s.button_yes}`}
                                onClick={(e) => { customFunction(); closeModal(e) }}
                            >
                                {customConfirm}
                            </button>
                            <button
                                className={`${s.button} ${s.button_no}`}
                                onClick={(e) => { closeModal(e) }}
                            >
                                {customCancel}
                            </button>
                        </div>
                    </div>
                </Wrapper>
            }
            {children}
        </div>
    )
}
