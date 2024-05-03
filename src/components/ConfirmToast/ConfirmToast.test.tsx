import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeAll, describe, it, vi } from 'vitest'
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

  it('should render & pass toasText', () => {
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
})
