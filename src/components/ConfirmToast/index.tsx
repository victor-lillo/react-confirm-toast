import React from 'react'
import clsx from 'clsx'
import { CloseIcon } from '../CloseIcon'
import styles from './styles.module.css'

export interface ConfirmToastProps {
  asModal?: boolean
  childrenClassName?: string
  customCancel?: string
  customConfirm?: string
  customFunction: () => void
  message?: string
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'
  setShowConfirmToast: React.Dispatch<React.SetStateAction<boolean>>
  showCloseIcon?: boolean
  showConfirmToast: boolean
  theme?: 'light' | 'dark' | 'snow' | 'lilac'
}

export function ConfirmToast({
  asModal = false,
  childrenClassName,
  customCancel = 'Cancel',
  customConfirm = 'Ok',
  customFunction,
  message = 'Do you want to continue?',
  position = 'bottom-right',
  setShowConfirmToast,
  showCloseIcon = true,
  showConfirmToast,
  theme = 'light',
}: ConfirmToastProps) {
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

  const classes = clsx(
    styles.container,
    {
      [styles[position]]: asModal ? false : position, //if asModal, don't return 'position' class
      [styles['modal-content']]: asModal,
    },
    styles[theme],
    childrenClassName
  )

  return (
    showConfirmToast && (
      <Wrapper asModal={asModal}>
        <output className={classes}>
          <div className={styles['title-container']}>
            <p className={styles.title}>{message}</p>
            {showCloseIcon && (
              <button
                className={styles['close-button']}
                onClick={(e) => {
                  closeModal(e)
                }}
              >
                <CloseIcon
                  aria-label='close modal'
                  className={styles['close-svg']}
                />
              </button>
            )}
          </div>

          <div className={styles['buttons-container']}>
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
        </output>
      </Wrapper>
    )
  )
}
