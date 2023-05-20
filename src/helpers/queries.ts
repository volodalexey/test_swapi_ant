import {
  QueryClient,
  useQuery,
  type UseQueryResult
} from '@tanstack/react-query'
import { fetchList, fetchView } from './api'
import { ResourceType, type IResourcesList, type IResource } from '../resources/Resources'
import { logQuery } from './logger'

export const QUERY_KEYS = {
  filmsList: 'filmsList',
  peopleList: 'peopleList',
  planetsList: 'planetsList',
  speciesList: 'speciesList',
  starshipsList: 'starshipsList',
  vehiclesList: 'vehiclesList',
  filmsView: 'filmsView',
  peopleView: 'peopleView',
  planetsView: 'planetsView',
  speciesView: 'speciesView',
  starshipsView: 'starshipsView',
  vehiclesView: 'vehiclesView'
}

export const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 1000 * 60 } } })

export const useListQuery = <T extends IResource>({
  resourceType,
  page,
  pageSize,
  query
}: {
  resourceType: ResourceType
  page?: number
  pageSize?: number
  query?: string
}): UseQueryResult<IResourcesList<T>> => {
  let firstQueryKey
  switch (resourceType) {
    case ResourceType.Films:
      firstQueryKey = QUERY_KEYS.filmsList
      break
    case ResourceType.People:
      firstQueryKey = QUERY_KEYS.peopleList
      break
    case ResourceType.Planets:
      firstQueryKey = QUERY_KEYS.planetsList
      break
    case ResourceType.Species:
      firstQueryKey = QUERY_KEYS.speciesList
      break
    case ResourceType.Starships:
      firstQueryKey = QUERY_KEYS.starshipsList
      break
    case ResourceType.Vehicles:
      firstQueryKey = QUERY_KEYS.vehiclesList
      break
  }
  const queryKey = [firstQueryKey, page, pageSize, query]
  logQuery('useListQuery', queryKey)
  return useQuery({
    queryKey,
    queryFn: async ({ signal }) => await fetchList({
      resourceType,
      page,
      pageSize,
      query,
      signal
    })
  })
}

export const useViewQuery = <T extends IResource>({
  id,
  resourceType
}: {
  id: number | string
  resourceType: ResourceType
}): UseQueryResult<T> => {
  let firstQueryKey
  switch (resourceType) {
    case ResourceType.Films:
      firstQueryKey = QUERY_KEYS.filmsView
      break
    case ResourceType.People:
      firstQueryKey = QUERY_KEYS.peopleView
      break
    case ResourceType.Planets:
      firstQueryKey = QUERY_KEYS.planetsView
      break
    case ResourceType.Species:
      firstQueryKey = QUERY_KEYS.speciesView
      break
    case ResourceType.Starships:
      firstQueryKey = QUERY_KEYS.starshipsView
      break
    case ResourceType.Vehicles:
      firstQueryKey = QUERY_KEYS.vehiclesView
      break
  }
  const queryKey = [firstQueryKey, id]
  logQuery('useViewQuery', queryKey)
  return useQuery({
    queryKey,
    queryFn: async ({ signal }) => await fetchView({
      id,
      resourceType,
      signal
    })
  })
}
