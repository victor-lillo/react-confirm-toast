import { useEffect, useRef } from 'react'
import clsx from 'clsx'
import { CloseIcon } from '../CloseIcon'
import styles from './styles.module.css'

export interface ConfirmToastProps {
  asModal?: boolean
  className?: string
  cancelButtonText?: string
  confirmButtonText?: string
  customFunction: () => void
  toastText?: string
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'
  setShowConfirmToast: React.Dispatch<React.SetStateAction<boolean>>
  showCloseIcon?: boolean
  showConfirmToast: boolean
  theme?: 'light' | 'dark' | 'snow' | 'lilac'
}

export function ConfirmToast({
  asModal = false,
  className,
  cancelButtonText = 'Cancel',
  confirmButtonText = 'Ok',
  customFunction,
  toastText = 'Do you want to continue?',
  position = 'bottom-right',
  setShowConfirmToast,
  showCloseIcon = true,
  showConfirmToast,
  theme = 'light',
}: ConfirmToastProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  function handleClickOut(event: MouseEvent) {
    const $clickedElement = event.target as HTMLElement

    if (asModal && dialogRef.current && $clickedElement.matches('dialog')) {
      console.log({ asModal }, 'click out')
      setShowConfirmToast(false)
    } else if (!asModal && dialogRef.current && !dialogRef.current.contains($clickedElement)) {
      console.log({ asModal }, 'click out')
      setShowConfirmToast(false)
    }
  }

  function handleEsc(event: KeyboardEvent) {
    const { key: pressedKey } = event
    if (pressedKey === 'Escape') setShowConfirmToast(false)
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEsc)

    if (showConfirmToast) {
      asModal ? dialogRef.current?.showModal() : dialogRef.current?.show()
      document.addEventListener('click', handleClickOut, true)
    } else {
      dialogRef.current?.close()
      document.removeEventListener('click', handleClickOut, true)
    }

    return () => {
      document.removeEventListener('click', handleClickOut, true)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [showConfirmToast])

  const classes = clsx(
    styles.dialog,
    {
      [styles['dialog--modal']]: asModal,
      [styles[position]]: asModal ? false : position, //if asModal, don't return 'position' class
    },
    styles[theme],
    className
  )

  return (
    <dialog
      className={classes}
      ref={dialogRef}
    >
      <div className={styles.container}>
        <div className={styles['title-container']}>
          <p className={styles.title}>{toastText}</p>
          {showCloseIcon && (
            <button
              className={styles['close-button']}
              onClick={() => setShowConfirmToast(false)}
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
            onClick={() => {
              customFunction()
              setShowConfirmToast(false)
            }}
          >
            {confirmButtonText}
          </button>
          <button
            className={`${styles.button} ${styles['button--no']}`}
            onClick={() => setShowConfirmToast(false)}
          >
            {cancelButtonText}
          </button>
        </div>
      </div>
    </dialog>
  )
}
