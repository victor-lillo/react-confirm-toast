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
        customFunction={CUSTOM_FUNCTION_MOCK}
        setShowConfirmToast={MOCK_SETSTATE}
        showConfirmToast={MOCK_STATES.open}
      />
    )
  })

  it('should render & pass toastText', () => {
    render(
      <ConfirmToast
        customFunction={CUSTOM_FUNCTION_MOCK}
        setShowConfirmToast={MOCK_SETSTATE}
        showConfirmToast={MOCK_STATES.open}
        toastText='Testing'
      />
    )
    screen.getByText('Testing')
  })

  it('should pass attributes to buttonYes, buttonNo & buttonClose', () => {
    render(
      <ConfirmToast
        buttonCloseAttributes={{ 'data-testid': 'close' }}
        buttonNoAttributes={{ 'data-testid': 'no' }}
        buttonYesAttributes={{ 'data-testid': 'yes' }}
        customFunction={CUSTOM_FUNCTION_MOCK}
        setShowConfirmToast={MOCK_SETSTATE}
        showConfirmToast={MOCK_STATES.open}
      />
    )

    screen.getByTestId('close')
    screen.getByTestId('yes')
    screen.getByTestId('no')
  })

  it('should call setState & not customFunction on buttonClose click', () => {
    render(
      <ConfirmToast
        buttonCloseAttributes={{ 'data-testid': 'close' }}
        customFunction={CUSTOM_FUNCTION_MOCK}
        setShowConfirmToast={MOCK_SETSTATE}
        showConfirmToast={MOCK_STATES.open}
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
        buttonNoAttributes={{ 'data-testid': 'no' }}
        customFunction={CUSTOM_FUNCTION_MOCK}
        setShowConfirmToast={MOCK_SETSTATE}
        showConfirmToast={MOCK_STATES.open}
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
        buttonYesAttributes={{ 'data-testid': 'yes' }}
        customFunction={CUSTOM_FUNCTION_MOCK}
        setShowConfirmToast={MOCK_SETSTATE}
        showConfirmToast={MOCK_STATES.open}
      />
    )

    expect(CUSTOM_FUNCTION_MOCK).toHaveBeenCalledTimes(0)
    expect(MOCK_SETSTATE).toHaveBeenCalledTimes(0)

    fireEvent.click(screen.getByTestId('yes'))

    expect(CUSTOM_FUNCTION_MOCK).toHaveBeenCalledTimes(1)
    expect(MOCK_SETSTATE).toHaveBeenCalledTimes(1)
  })

  it('should not call customFunction & setState on disabled buttonYes click', () => {
    render(
      <ConfirmToast
        buttonYesAttributes={{ 'data-testid': 'yes', disabled: true }}
        customFunction={CUSTOM_FUNCTION_MOCK}
        setShowConfirmToast={MOCK_SETSTATE}
        showConfirmToast={MOCK_STATES.open}
      />
    )

    expect(CUSTOM_FUNCTION_MOCK).toHaveBeenCalledTimes(0)
    expect(MOCK_SETSTATE).toHaveBeenCalledTimes(0)

    fireEvent.click(screen.getByTestId('yes'))

    expect(CUSTOM_FUNCTION_MOCK).toHaveBeenCalledTimes(0)
    expect(MOCK_SETSTATE).toHaveBeenCalledTimes(0)
  })

  it('should call setState & not customFunction on ESC key press', () => {
    render(
      <ConfirmToast
        customFunction={CUSTOM_FUNCTION_MOCK}
        setShowConfirmToast={MOCK_SETSTATE}
        showConfirmToast={MOCK_STATES.open}
      />
    )

    expect(CUSTOM_FUNCTION_MOCK).toHaveBeenCalledTimes(0)
    expect(MOCK_SETSTATE).toHaveBeenCalledTimes(0)

    fireEvent.keyDown(screen.getByRole('dialog'), {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27,
    })

    expect(CUSTOM_FUNCTION_MOCK).toHaveBeenCalledTimes(0)
    expect(MOCK_SETSTATE).toHaveBeenCalledTimes(1)
  })

  it('should call setState & not customFunction on click out the dialog [asModal = true]', () => {
    render(
      <ConfirmToast
        customFunction={CUSTOM_FUNCTION_MOCK}
        setShowConfirmToast={MOCK_SETSTATE}
        showConfirmToast={MOCK_STATES.open}
        asModal={true}
      />
    )

    expect(CUSTOM_FUNCTION_MOCK).toHaveBeenCalledTimes(0)
    expect(MOCK_SETSTATE).toHaveBeenCalledTimes(0)

    fireEvent.click(screen.getByRole('dialog'))

    expect(CUSTOM_FUNCTION_MOCK).toHaveBeenCalledTimes(0)
    expect(MOCK_SETSTATE).toHaveBeenCalledTimes(1)
  })

  it('should call setState & not customFunction on click out the dialog [asModal = false]', () => {
    render(
      <ConfirmToast
        customFunction={CUSTOM_FUNCTION_MOCK}
        setShowConfirmToast={MOCK_SETSTATE}
        showConfirmToast={MOCK_STATES.open}
        asModal={false}
      />
    )

    expect(CUSTOM_FUNCTION_MOCK).toHaveBeenCalledTimes(0)
    expect(MOCK_SETSTATE).toHaveBeenCalledTimes(0)

    fireEvent.click(document)

    expect(CUSTOM_FUNCTION_MOCK).toHaveBeenCalledTimes(0)
    expect(MOCK_SETSTATE).toHaveBeenCalledTimes(1)
  })
})
