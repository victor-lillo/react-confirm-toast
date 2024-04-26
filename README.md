# react-confirm-toast

> A light and customizable confirm toast component.

Creates a toast notification which allows you to confirm or reject the execution of a function.

Check the [documentation web](https://react-confirm-toast-docs.vercel.app/) for a live demo.

## Installation

Install using npm:

```sh
npm install react-confirm-toast
```

Install using yarn:

```sh
yarn add react-confirm-toast
```

## Usage

[React](https://sass-lang.com/) and [React-dom](https://sass-lang.com/) are peer dependencies. Your project needs to have them installed in order to use this confirm toast.

```jsx
import { ConfirmToast } from 'react-confirm-toast'
```

## Properties

|          Name           |                             Value                              |          Default           | Required | Description                                                                                             |
| :---------------------: | :------------------------------------------------------------: | :------------------------: | :------: | ------------------------------------------------------------------------------------------------------- |
|        **theme**        |            `'light' \| 'dark' \| 'snow' \| 'lilac'`            |          `light`           |          | Sets the toast style theme.                                                                             |
|       **asModal**       |                           `boolean`                            |          `false`           |          | Toast will be displayed as a modal element, in the center of the viewport and darkening the background. |
|      **className**      |                            `string`                            |           `none`           |          | Adds a class to the element.                                                                            |
|      **position**       | `'bottom-left' \| 'bottom-right' \| 'top-left' \| 'top-right'` |       `bottom-right`       |          | Sets the toast position. It will be ignored if `asModal` is `true`.                                     |
|      **toastText**      |                            `string`                            | `Do you want to continue?` |          | Sets the toast question text.                                                                           |
|    **showCloseIcon**    |                           `boolean`                            |           `true`           |          | Sets if the close icon is displayed.                                                                    |
|   **customFunction**    |                           `Function`                           |           `none`           |    ✅    | Defines the function to confirm.                                                                        |
|  **cancelButtonText**   |                            `string`                            |          `Cancel`          |          | Sets the cancel button message.                                                                         |
|  **confirmButtonText**  |                            `string`                            |            `Ok`            |          | Sets the confirm button message.                                                                        |
|  **showConfirmToast**   |                           `boolean`                            |                            |    ✅    | A boolean React state that controls the toast.                                                          |
| **setShowConfirmToast** |        `React.Dispatch<React.SetStateAction<boolean>>`         |                            |    ✅    | The `setState` of the `showConfirmToast` state.                                                         |

### Usage with React

Minimum working example:

```jsx
import { ConfirmToast } from 'react-confirm-toast'

// [...]

const myFunction = () => {
  console.log('Confirmed!')
}

// [...]

;<ConfirmToast customFunction={myFunction}>
  <button>Click to run the default component</button>
</ConfirmToast>
```

Modal example:

```jsx
import { ConfirmToast } from 'react-confirm-toast'

// [...]

const myFunction = () => {
  console.log('Confirmed!')
}

// [...]

;<ConfirmToast
  asModal={true}
  childrenClassName='margin-top-10'
  customCancel='Reject'
  customConfirm='Confirm'
  customFunction={myFunction}
  message='Do you want to confirm?'
  position='top-left' //will be ignored cause asModal=true
  showCloseIcon={false}
  theme='lilac'
>
  <button>Click to run the customized component</button>
</ConfirmToast>
```
