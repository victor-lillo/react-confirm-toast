import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, it, vi } from 'vitest'
import { ConfirmToast } from '.'

const MOCK_STATES = {
  open: true,
  close: false,
}

const MOCK_SETSTATE = vi.fn()
const CUSTOM_FUNCTION_MOCK = vi.fn()

describe('ConfirmToast test:', () => {
  afterEach(() => {
    vi.clearAllMocks()
    vi.resetAllMocks()
  })

  it('should render component', () => {
    render(
      <ConfirmToast
        showConfirmToast={MOCK_STATES.open}
        setShowConfirmToast={MOCK_SETSTATE}
        customFunction={CUSTOM_FUNCTION_MOCK}
      />
    )
  })

  it('should render & pass toastText', () => {
    render(
      <ConfirmToast
        showConfirmToast={MOCK_STATES.open}
        setShowConfirmToast={MOCK_SETSTATE}
        customFunction={CUSTOM_FUNCTION_MOCK}
        toastText='Testing'
      />
    )
    screen.getByText('Testing')
  })

  it('should pass attributes to buttonYes, buttonNo & buttonClose', () => {
    render(
      <ConfirmToast
        showConfirmToast={MOCK_STATES.open}
        setShowConfirmToast={MOCK_SETSTATE}
        customFunction={CUSTOM_FUNCTION_MOCK}
        toastText='Testing'
        buttonCloseAttributes={{ 'data-testid': 'close' }}
        buttonYesAttributes={{ 'data-testid': 'yes' }}
        buttonNoAttributes={{ 'data-testid': 'no' }}
      />
    )

    screen.getByTestId('close')
    screen.getByTestId('yes')
    screen.getByTestId('no')
  })

  it('should call setState & not customFunction on buttonClose click', () => {
    render(
      <ConfirmToast
        showConfirmToast={MOCK_STATES.open}
        setShowConfirmToast={MOCK_SETSTATE}
        customFunction={CUSTOM_FUNCTION_MOCK}
        toastText='Testing'
        buttonCloseAttributes={{ 'data-testid': 'close' }}
      />
    )

    expect(CUSTOM_FUNCTION_MOCK).toHaveBeenCalledTimes(0)
    expect(MOCK_SETSTATE).toHaveBeenCalledTimes(0)

    fireEvent.click(screen.getByTestId('close'))

    expect(CUSTOM_FUNCTION_MOCK).toHaveBeenCalledTimes(0)
    expect(MOCK_SETSTATE).toHaveBeenCalledTimes(1)
  })

  it('should call setState & not customFunction on buttonNo click', () => {
    render(
      <ConfirmToast
        showConfirmToast={MOCK_STATES.open}
        setShowConfirmToast={MOCK_SETSTATE}
        customFunction={CUSTOM_FUNCTION_MOCK}
        toastText='Testing'
        buttonNoAttributes={{ 'data-testid': 'no' }}
      />
    )

    expect(CUSTOM_FUNCTION_MOCK).toHaveBeenCalledTimes(0)
    expect(MOCK_SETSTATE).toHaveBeenCalledTimes(0)

    fireEvent.click(screen.getByTestId('no'))

    expect(CUSTOM_FUNCTION_MOCK).toHaveBeenCalledTimes(0)
    expect(MOCK_SETSTATE).toHaveBeenCalledTimes(1)
  })

  it('should call customFunction & setState on buttonYes click', () => {
    render(
      <ConfirmToast
        showConfirmToast={MOCK_STATES.open}
        setShowConfirmToast={MOCK_SETSTATE}
        customFunction={CUSTOM_FUNCTION_MOCK}
        toastText='Testing'
        buttonYesAttributes={{ 'data-testid': 'yes' }}
      />
    )

    expect(MOCK_SETSTATE).toHaveBeenCalledTimes(0)
    expect(CUSTOM_FUNCTION_MOCK).toHaveBeenCalledTimes(0)

    fireEvent.click(screen.getByTestId('yes'))

    expect(CUSTOM_FUNCTION_MOCK).toHaveBeenCalledTimes(1)
    expect(MOCK_SETSTATE).toHaveBeenCalledTimes(1)
  })

  it('should not call customFunction & setState on disabled buttonYes click', () => {
    render(
      <ConfirmToast
        showConfirmToast={MOCK_STATES.open}
        setShowConfirmToast={MOCK_SETSTATE}
        customFunction={CUSTOM_FUNCTION_MOCK}
        toastText='Testing'
        buttonYesAttributes={{ 'data-testid': 'yes', disabled: true }}
      />
    )

    expect(MOCK_SETSTATE).toHaveBeenCalledTimes(0)
    expect(CUSTOM_FUNCTION_MOCK).toHaveBeenCalledTimes(0)

    fireEvent.click(screen.getByTestId('yes'))

    expect(CUSTOM_FUNCTION_MOCK).toHaveBeenCalledTimes(0)
    expect(MOCK_SETSTATE).toHaveBeenCalledTimes(0)
  })
})
