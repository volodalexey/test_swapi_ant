import React, { type ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import { ResourceType } from '../resources/Resources'
import { logRouteParams } from '../helpers/logger'
import { FilmsList } from './films/FilmsList'
import { PeopleList } from './people/PeopleList'
import { PlanetsList } from './planets/PlanetsList'
import { SpeciesList } from './species/SpeciesList'
import { StarshipsList } from './starships/StarshipsList'
import { VehiclesList } from './vehicles/VehiclesList'

export function ResourcesList (): ReactElement {
  const params = useParams()
  const resourceType = params.resourceType as ResourceType
  logRouteParams(params)
  switch (resourceType) {
    case ResourceType.Films:
      return <FilmsList />
    case ResourceType.People:
      return <PeopleList />
    case ResourceType.Planets:
      return <PlanetsList />
    case ResourceType.Species:
      return <SpeciesList />
    case ResourceType.Starships:
      return <StarshipsList />
    case ResourceType.Vehicles:
      return <VehiclesList />
  }
}
