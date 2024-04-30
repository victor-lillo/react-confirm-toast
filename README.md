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

[React](https://www.npmjs.com/package/react) and [React-dom](https://www.npmjs.com/package/react-dom) are peer dependencies. Your project needs to have them installed in order to use this confirm toast.

```jsx
import { ConfirmToast } from 'react-confirm-toast'
```

## Customization 🎨

`ConfirmToast` is highly customizable, you can:

- Change **theme** among the 4 available, or creating a custom one.
- Use the toast **as a modal** (in the center of the viewport) or not.
- Change the **position** of the toast.
- Change toast and button **texts**.
- Hide or show the **close icon**.
- Select which button will be autofocused when the dialog opens.

## Properties ⚙️

|          Name           |                                Value                                 |           Default            | Required | Description                                                                                             |
| :---------------------: | :------------------------------------------------------------------: | :--------------------------: | :------: | ------------------------------------------------------------------------------------------------------- |
|   **customFunction**    |                              `Function`                              |                              |    ✅    | Defines the function to confirm.                                                                        |
|  **showConfirmToast**   |                              `boolean`                               |                              |    ✅    | A boolean React state that controls the toast.                                                          |
| **setShowConfirmToast** |           `React.Dispatch<React.SetStateAction<boolean>>`            |                              |    ✅    | The `setState` of the `showConfirmToast` state.                                                         |
|       **asModal**       |                              `boolean`                               |           `false`            |          | Toast will be displayed as a modal element, in the center of the viewport and darkening the background. |
|    **buttonNoText**     |                               `string`                               |          `'Cancel'`          |          | Sets the cancel button message.                                                                         |
|    **buttonYesText**    |                               `string`                               |            `'Ok'`            |          | Sets the confirm button message.                                                                        |
|      **className**      |                               `string`                               |                              |          | Adds a class to the element.                                                                            |
|  **elementAutofocus**   |          `'button-yes'` \| `'button-no'` \| `'close-icon'`           |        `'button-yes'`        |          | Sets which element will be autofocused when the toast opens.                                            |
|      **position**       | `'bottom-left'` \| `'bottom-right'` \| `'top-left'` \| `'top-right'` |       `'bottom-right'`       |          | Sets the toast position. It will be ignored if `asModal` is `true`.                                     |
|    **showCloseIcon**    |                              `boolean`                               |            `true`            |          | Sets if the close icon is displayed.                                                                    |
|        **theme**        |            `'light'` \| `'dark'` \| `'snow'` \| `'lilac'`            |          `'light'`           |          | Sets the toast style theme.                                                                             |
|      **toastText**      |                               `string`                               | `'Do you want to continue?'` |          | Sets the toast question text.                                                                           |

## Creating or updating a theme 🦾

For this purpose, there are some **custom properties** that you can override, passing a class to the `className` prop:

|               Name                | Description                                                 |
| :-------------------------------: | ----------------------------------------------------------- |
|  **--confirm-toast-box-shadow**   | Box shadow of the confirm toast.                            |
|      **--confirm-toast-bg**       | Background color of the confirm toast.                      |
|   **--confirm-toast-msg-color**   | Color of the message text in the confirm toast.             |
|  **--confirm-toast-icon-color**   | Color of the icon in the confirm toast.                     |
| **--confirm-toast-btn-yes-color** | Color of the "Yes" button text in the confirm toast.        |
| **--confirm-toast-btn-no-color**  | Color of the "No" button text in the confirm toast.         |
|  **--confirm-toast-btn-yes-bg**   | Background color of the "Yes" button in the confirm toast.  |
|   **--confirm-toast-btn-no-bg**   | Background color of the "No" button in the confirm toast.   |
|   **--confirm-toast-btn-hover**   | Opacity value for button hover effect in the confirm toast. |

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
        customFunction={myFunction}
        setShowConfirmToast={setShow}
        showConfirmToast={show}
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
        buttonNoText='No'
        buttonYesText='Yes'
        customFunction={myFunction}
        setShowConfirmToast={setShow}
        showConfirmToast={show}
        theme='dark'
        toastText=''
      />
    </section>
  )
}
```

### Using a custom theme

Create a CSS class with the desired custom properties.

```css
.custom-confirm-toast-theme {
  --confirm-toast-box-shadow: 0 0 1px 4px purple;
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
        customFunction={myFunction}
        setShowConfirmToast={setShow}
        showConfirmToast={show}
      />
    </section>
  )
}
```

## Migration from `v1` to `v2`

In this version there are several breaking changes:

### Properties naming

Although the behavior remains unchanged, some properties have been renamed due to syntax reasons:

|    Previous name    |  Current name   |
| :-----------------: | :-------------: |
| `childrenClassName` |   `className`   |
|   `customCancel`    | `buttonNoText`  |
|   `customConfirm`   | `buttonYesText` |
|      `message`      |   `toastText`   |

### New attributes

In this version, the component doesn't control its own state. This decision has been made to increase the flexibility of the component and to enable its programmatic use.

For this, now there are two new props:

- `showConfirmToast` (`boolean`): the boolean state.
- `setShowConfirmToast` (`React.Dispatch<React.SetStateAction<boolean>>`): the state setter.
