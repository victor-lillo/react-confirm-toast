import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { ConfirmToast } from '.'
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
type Story = StoryObj<typeof ConfirmToast>

const Template: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <button onClick={() => setOpen(true)}>External Click me!</button>
        <ConfirmToast
          {...args}
          showConfirmToast={open}
          setShowConfirmToast={setOpen}
        />
      </>
    )
  },
}

export const AsModal: Story = {
  ...Template,
  args: { asModal: true },
}

export const Light: Story = {
  ...Template,
  args: { theme: 'light' },
}

export const Dark: Story = {
  ...Template,
  args: { theme: 'dark' },
}

export const Lilac: Story = {
  ...Template,
  args: { theme: 'lilac' },
}

export const Snow: Story = {
  ...Template,
  args: { theme: 'snow' },
}
