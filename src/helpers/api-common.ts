import { type ResourceType } from '../resources/Resources'

export const API_PATH = {
  base: 'https://swapi.dev/api'
}

export function getResourcesPath (resourceType: ResourceType): string {
  return resourceType as string
}

export const API_BODY = {
  list: {
    page: 'page',
    pageSize: 'pageSize',
    queryName: 'search'
  }
}

export const API_DEFAULT = {
  list: {
    page: 1
  }
}
