import type { Meta, StoryObj } from '@storybook/vue3-vite'

import StepLoading from '@/components/loading/StepLoading.vue'

const meta = {
  title: 'Loading/SetpLoading',
  component: StepLoading,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  parameters: {
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: '#202020' },
        light: { name: 'Light', value: '#ffffff' },
      },
    },
  },
} satisfies Meta<typeof StepLoading>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    layout: 'centered',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {},
}
