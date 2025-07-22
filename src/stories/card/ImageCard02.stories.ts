import type { Meta, StoryObj } from '@storybook/vue3-vite'

import ImageCard02 from '@/components/card/ImageCard02.vue'

const meta = {
  title: 'Card/Image Card 02',
  component: ImageCard02,
  argTypes: {
    width: { control: { type: 'range', min: 100, max: 600 } },
  },
  tags: ['card', 'information'],
  args: {
    width: 350,
  },
  globals: {
    backgrounds: { value: 'light' },
  },
  parameters: {
    backgrounds: {
      options: {
        light: { name: 'Light', value: '#F2F2F2' },
        dark: { name: 'Dark', value: '#333' },
      },
    },
  },
} satisfies Meta<typeof ImageCard02>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    layout: 'centered',
  },
}
