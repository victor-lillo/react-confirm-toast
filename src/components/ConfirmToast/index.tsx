import React, { useState } from 'react'
import clsx from 'clsx'
import { CloseIcon } from '../CloseIcon'
import styles from './styles.module.css'

interface Props {
  asModal?: boolean
  children: React.ReactNode
  childrenClassName?: string
  showCloseIcon?: boolean
  customCancel?: string
  customConfirm?: string
  customFunction: () => void
  message?: string
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'
  theme?: 'light' | 'dark' | 'snow' | 'lilac'
}

export function ConfirmToast({
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
  ...props
}: Props) {
  function Wrapper({
    asModal,
    children,
  }: {
    asModal: boolean
    children: React.ReactNode
  }): JSX.Element {
    if (asModal) {
      return (
        <div
          data-out={true}
          onClick={clickOutOfModal}
          className={styles.modal}
        >
          {children}
        </div>
      )
    }
    return <>{children}</>
  }

  const [showConfirmToast, setShowConfirmToast] = useState(false)

  const closeModal = (e: React.MouseEvent): void => {
    e.stopPropagation()
    setShowConfirmToast(false)
  }

  const clickOutOfModal = (e: React.MouseEvent): void => {
    const target = e.target as HTMLElement
    if (target.getAttribute('data-out')) {
      closeModal(e)
    }
  }

  const classes = clsx(styles.container, {
    [styles[position]]: asModal ? false : position, //if asModal, don't return 'position' class
    [styles['modal-content']]: asModal,
  })

  return (
    <div
      onClick={() => setShowConfirmToast(true)}
      className={clsx(styles[`${theme}_theme`], childrenClassName)}
    >
      {showConfirmToast && (
        <Wrapper asModal={asModal}>
          <div className={classes}>
            <div className={styles.title_wrapper}>
              <div className={styles.title}>{message}</div>
              {showCloseIcon && (
                <button
                  onClick={(e) => {
                    closeModal(e)
                  }}
                >
                <CloseIcon
                  aria-label='close modal'
                  className={styles.close}
                  onClick={(e) => {
                    closeModal(e)
                  }}
                />
              )}
            </div>

            <div className={styles.buttons_container}>
              <button
                className={`${styles.button} ${styles['button--yes']}`}
                onClick={(e) => {
                  customFunction()
                  closeModal(e)
                }}
              >
                {customConfirm}
              </button>
              <button
                className={`${styles.button} ${styles['button--no']}`}
                onClick={(e) => {
                  closeModal(e)
                }}
              >
                {customCancel}
              </button>
            </div>
          </div>
        </Wrapper>
      )}
      {children}
    </div>
  )
}
