import type { Meta, StoryFn } from '@storybook/react'
import { fn } from '@storybook/test'

import { ConfirmToast, ConfirmToastProps } from '.'
import { useState } from 'react'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/ConfirmToast',
  component: ConfirmToast,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    customFunction: fn(),
  },
} satisfies Meta<typeof ConfirmToast>

export default meta

const Template: StoryFn<ConfirmToastProps> = (args) => {
  const [open, setOpen] = useState(true)
  return (
    <>
      <button onClick={() => setOpen(!open)}>External Click me!</button>
      <ConfirmToast
        {...args}
        showConfirmToast={open}
        setShowConfirmToast={setOpen}
      />
    </>
  )
}

export const Default = Template.bind({})

export const AsModal = Template.bind({})
AsModal.args = { asModal: true }

export const Light = Template.bind({})
Light.args = { theme: 'light' }

export const Dark = Template.bind({})
Dark.args = { theme: 'dark' }

export const Lilac = Template.bind({})
Lilac.args = { theme: 'lilac' }

export const Snow = Template.bind({})
Snow.args = { theme: 'snow' }
