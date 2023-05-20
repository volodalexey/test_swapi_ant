import React, { type ReactElement } from 'react'
import { useRouteError } from 'react-router-dom'
import { logError } from '../helpers/logger'

export function ErrorPage ({ error }: { error?: Error } = {}): ReactElement {
  const _error = error ?? useRouteError() as Error
  logError(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p><i>{_error.message}</i></p>
      <p>
        <pre>{_error.stack}</pre>
      </p>
    </div>
  )
}
