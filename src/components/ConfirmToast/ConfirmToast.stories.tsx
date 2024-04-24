import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { ConfirmToast } from '.'
import { useState } from 'react'

function ConfirmToastStories(args: Partial<unknown>) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(!open)}>External Click me!</button>
      <ConfirmToast
        showConfirmToast={open}
        setShowConfirmToast={setOpen}
        // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
        customFunction={fn}
        {...args}
      ></ConfirmToast>
    </>
  )
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/ConfirmToast',
  component: ConfirmToastStories,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof ConfirmToastStories>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const AsModal: Story = {
  args: {
    theme: 'light',
    asModal: true,
  },
}

export const Light: Story = {
  args: {
    theme: 'light',
  },
}

export const Dark: Story = {
  args: {
    theme: 'dark',
  },
}

export const Lilac: Story = {
  args: {
    theme: 'lilac',
  },
}

export const Snow: Story = {
  args: {
    theme: 'snow',
  },
}
