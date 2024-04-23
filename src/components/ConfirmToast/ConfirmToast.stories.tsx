import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { ConfirmToast } from '.'

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
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  args: {
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    customFunction: fn(),
    children: <button>Click me!</button>,
  },
} satisfies Meta<typeof ConfirmToast>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

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
