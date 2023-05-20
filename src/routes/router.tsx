import React from 'react'
import {
  createHashRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import { ErrorPage } from './ErrorPage'
import { CLIENT_PATH } from './client-path'
import { HomeLayout } from '../layouts/HomeLayout'
import { ListAndSearchPage } from '../pages/ListAndSearchPage'
import { ResourceViewPage } from '../pages/ResourceViewPage'

const routes = createRoutesFromElements(
  <Route>
    <Route index element={<HomeLayout />} />

    <Route path={`/${CLIENT_PATH.app.$}`}>
      <Route path=":resourceType" >
        <Route path={CLIENT_PATH.app.listAndSearch} element={<ListAndSearchPage />} />
        <Route path=":resourceId" element={<ResourceViewPage />} />
      </Route>
    </Route>

    <Route path="*" element={<ErrorPage error={new Error('Page not found')} />} />
  </Route>
)

export const router = process.env.HASH_ROUTER === 'true' ? createHashRouter(routes) : createBrowserRouter(routes)
