import { QueryClientProvider } from '@tanstack/react-query'
import React, { type ReactElement } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { queryClient } from './helpers/queries'
import { store } from './redux-functionality/store'
import { router } from './routes/router'
import { ThemeProvider } from './styles/ThemeProvider'

function App (): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  )
}

export default App
