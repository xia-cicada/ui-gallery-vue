import type { Preview } from '@storybook/vue3-vite'
import 'virtual:uno.css'
import '../src/assets/main.scss'
import 'animate.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
