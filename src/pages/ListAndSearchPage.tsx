import React, { type ReactElement } from 'react'
import { MenuAndHeaderLayout } from '../layouts/MenuAndHeaderLayout'
import { SearchHeader } from '../components/SearchHeader'
import { ResourcesList } from '../components/ResourcesList'

export function ListAndSearchPage (): ReactElement {
  return (
    <MenuAndHeaderLayout
      headerCenter={<SearchHeader />}
      contentMain={<ResourcesList />}
    />
  )
}
