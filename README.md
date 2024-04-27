# react-confirm-toast

> A light and customizable confirm toast component.

Creates a toast notification which allows you to confirm or reject the execution of a function.

Check the [documentation web](https://react-confirm-toast-docs.vercel.app/) for a live demo.

## Installation 🚀

Install using npm:

```sh
npm install react-confirm-toast
```

Install using yarn:

```sh
yarn add react-confirm-toast
```

## Usage 🎮

[React](https://sass-lang.com/) and [React-dom](https://sass-lang.com/) are peer dependencies. Your project needs to have them installed in order to use this confirm toast.

```jsx
import { ConfirmToast } from 'react-confirm-toast'
```

## Customization 🎨

`ConfirmToast` is highly customizable, you can:

- Change theme among the 4 available, or creating a custom one.
- Use the toast as a modal (in the center of the viewport) or not.
- Change the position of the toast.
- Change toast and button texts.
- Hide or show the close icon.

## Properties ⚙️

|          Name           |                             Value                              |          Default           | Required | Description                                                                                             |
| :---------------------: | :------------------------------------------------------------: | :------------------------: | :------: | ------------------------------------------------------------------------------------------------------- |
|   **customFunction**    |                           `Function`                           |                            |    ✅    | Defines the function to confirm.                                                                        |
|  **showConfirmToast**   |                           `boolean`                            |                            |    ✅    | A boolean React state that controls the toast.                                                          |
| **setShowConfirmToast** |        `React.Dispatch<React.SetStateAction<boolean>>`         |                            |    ✅    | The `setState` of the `showConfirmToast` state.                                                         |
|        **theme**        |            `'light' \| 'dark' \| 'snow' \| 'lilac'`            |          `light`           |          | Sets the toast style theme.                                                                             |
|       **asModal**       |                           `boolean`                            |          `false`           |          | Toast will be displayed as a modal element, in the center of the viewport and darkening the background. |
|      **className**      |                            `string`                            |           `none`           |          | Adds a class to the element.                                                                            |
|      **position**       | `'bottom-left' \| 'bottom-right' \| 'top-left' \| 'top-right'` |       `bottom-right`       |          | Sets the toast position. It will be ignored if `asModal` is `true`.                                     |
|      **toastText**      |                            `string`                            | `Do you want to continue?` |          | Sets the toast question text.                                                                           |
|    **showCloseIcon**    |                           `boolean`                            |           `true`           |          | Sets if the close icon is displayed.                                                                    |
|  **cancelButtonText**   |                            `string`                            |          `Cancel`          |          | Sets the cancel button message.                                                                         |
|  **confirmButtonText**  |                            `string`                            |            `Ok`            |          | Sets the confirm button message.                                                                        |

## Examples 📝

### Minimum working example

This is a minimum working example, using the 3 required props:

```jsx
import { useState } from 'react'
import { ConfirmToast } from '../ConfirmToast'

export function Page() {
  const [show, setShow] = useState(false)

  function myFunction() {
    alert('Done!')
  }

  return (
    <section>
      <h1>Page</h1>
      <button
        onClick={() => {
          setShow(true)
        }}
      >
        Click to open ConfirmToast
      </button>
      <ConfirmToast
        customFunction={myFunction}
        setShowConfirmToast={setShow}
        showConfirmToast={show}
      />
    </section>
  )
}
```

### Modal example

```jsx
import { useState } from 'react'
import { ConfirmToast } from '../ConfirmToast'

export function Page() {
  const [show, setShow] = useState(false)

  function myFunction() {
    alert('Done!')
  }

  return (
    <section>
      <h1>Page</h1>
      <button
        onClick={() => {
          setShow(true)
        }}
      >
        Click to open ConfirmToast
      </button>
      <ConfirmToast
        asModal={true}
        setShowConfirmToast={setShow}
        showConfirmToast={show}
        customFunction={myFunction}
      />
    </section>
  )
}
```

### Changing theme and texts

```jsx
import { useState } from 'react'
import { ConfirmToast } from '../ConfirmToast'

export function Page() {
  const [show, setShow] = useState(false)

  function myFunction() {
    alert('Done!')
  }

  return (
    <section>
      <h1>Page</h1>
      <button
        onClick={() => {
          setShow(true)
        }}
      >
        Click to open ConfirmToast
      </button>
      <ConfirmToast
        cancelButtonText='Yes'
        confirmButtonText='No'
        toastText=''
        theme='dark'
        setShowConfirmToast={setShow}
        showConfirmToast={show}
        customFunction={myFunction}
      />
    </section>
  )
}
```

### Using a custom theme

Create a CSS class with the desired custom properties.

```css
.custom-confirm-toast-theme {
  --confirm-toast-bg: aquamarine;
  --confirm-toast-msg-color: purple;
  --confirm-toast-icon-color: black;
  --confirm-toast-btn-yes-color: lightgreen;
  --confirm-toast-btn-no-color: black;
  --confirm-toast-btn-yes-bg: green;
  --confirm-toast-btn-no-bg: yellow;
  --confirm-toast-btn-hover: 0.9;
}
```

And pass it to the `className` property.

```jsx
import 'custom-theme.css'
import { useState } from 'react'
import { ConfirmToast } from '../ConfirmToast'

export function Page() {
  const [show, setShow] = useState(false)

  function myFunction() {
    alert('Done!')
  }

  return (
    <section>
      <h1>Page</h1>
      <button
        onClick={() => {
          setShow(true)
        }}
      >
        Click to open ConfirmToast
      </button>
      <ConfirmToast
        className='custom-confirm-toast-theme'
        setShowConfirmToast={setShow}
        showConfirmToast={show}
        customFunction={myFunction}
      />
    </section>
  )
}
```

## Migration from v1 to v2

Some attributes have been renamed:

|     Previous name     |   Current name    |
| :-------------------: | :---------------: |
|      **asModal**      |         -         |
| **childrenClassName** |     className     |
|   **customCancel**    | cancelButtonText  |
|   **customConfirm**   | confirmButtonText |
|  **customFunction**   |         -         |
|      **message**      |     toastText     |
|     **position**      |         -         |
|   **showCloseIcon**   |         -         |
|       **theme**       |         -         |

New attributes:

state and setState
