import React, { type ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import { ResourceType } from '../resources/Resources'
import { logRouteParams } from '../helpers/logger'
import { FilmsSearchHeader } from './films/FilmsSearchHeader'
import { PeopleSearchHeader } from './people/PeopleSearchHeader'
import { PlanetsSearchHeader } from './planets/PlanetsSearchHeader'
import { SpeciesSearchHeader } from './species/SpeciesSearchHeader'
import { StarshipsSearchHeader } from './starships/StarshipsSearchHeader'
import { VehiclesSearchHeader } from './vehicles/VehiclesSearchHeader'

export function SearchHeader (): ReactElement {
  const params = useParams()
  const resourceType = params.resourceType as ResourceType
  logRouteParams(params)
  switch (resourceType) {
    case ResourceType.Films:
      return <FilmsSearchHeader />
    case ResourceType.People:
      return <PeopleSearchHeader />
    case ResourceType.Planets:
      return <PlanetsSearchHeader />
    case ResourceType.Species:
      return <SpeciesSearchHeader />
    case ResourceType.Starships:
      return <StarshipsSearchHeader />
    case ResourceType.Vehicles:
      return <VehiclesSearchHeader />
  }
}
