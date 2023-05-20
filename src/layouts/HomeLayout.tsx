import React, { type ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
import { logHomeNavigation } from '../helpers/logger'
import { FULL_CLIENT_PATH } from '../routes/client-path'

export function HomeLayout (): ReactElement {
  logHomeNavigation(FULL_CLIENT_PATH.peopleListAndSearch)
  return <Navigate to={FULL_CLIENT_PATH.peopleListAndSearch} replace />
}
