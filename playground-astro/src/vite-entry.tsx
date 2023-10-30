import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'next-themes'

import './global.css'
import '@fontsource/inter'
import { AppToastProvider } from './components/ui/toast-provider'
import { PlaygroundWithDefault } from './components/playground-with-default'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider attribute='class' enableSystem={false} defaultTheme='dark'>
        <AppToastProvider>
          <PlaygroundWithDefault />
        </AppToastProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
