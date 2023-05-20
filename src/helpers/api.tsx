import { type ResourceType, type IResource, type IResourcesList } from '../resources/Resources'
import { API_BODY, API_PATH, getResourcesPath } from './api-common'
import { logAPI } from './logger'

export async function fetchList<T extends IResource> (options: {
  resourceType: ResourceType
  page?: number
  pageSize?: number
  query?: string
  signal?: AbortSignal
}): Promise<IResourcesList<T>> {
  const { resourceType, page, pageSize, query, signal } = options
  logAPI(options)
  const searchParams = new URLSearchParams({
    [API_BODY.list.page]: String(page),
    [API_BODY.list.pageSize]: String(pageSize),
    [API_BODY.list.queryName]: String(query)
  })
  const listRes: IResourcesList<T> = await fetch(`${API_PATH.base}/${getResourcesPath(resourceType)}?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    signal,
    credentials: 'omit'
  }).then(async res => await res.json())
  return listRes
}

export async function fetchView<T extends IResource> (options: {
  resourceType: ResourceType
  id: number | string
  signal?: AbortSignal
}): Promise<T> {
  const { id, resourceType, signal } = options
  logAPI(options)
  const viewRes: T = await fetch(`${API_PATH.base}/${getResourcesPath(resourceType)}/${id}`, {
    method: 'GET',
    signal,
    credentials: 'omit'
  }).then(async res => await res.json())
  return viewRes
}
