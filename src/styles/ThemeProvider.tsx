import React, { type ReactElement, type ReactNode } from 'react'
import { ConfigProvider } from 'antd'
import { themeConfig } from './theme'

export function ThemeProvider ({ children }: { children?: ReactNode }): ReactElement {
  return <ConfigProvider theme={themeConfig}>
    {children}
  </ConfigProvider>
}
