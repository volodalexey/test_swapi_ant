import React, { type ReactElement } from 'react'
import { MenuAndHeaderLayout } from '../layouts/MenuAndHeaderLayout'
import { ResourcesView } from '../components/ResourcesView'
import { BackHeader } from '../components/BackHeader'

export function ResourceViewPage (): ReactElement {
  return (
    <MenuAndHeaderLayout
      headerCenter={<BackHeader />}
      contentMain={<ResourcesView />}
    />
  )
}
