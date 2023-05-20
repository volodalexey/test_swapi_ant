import React, { type ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import { ResourceType } from '../resources/Resources'
import { logRouteParams } from '../helpers/logger'
import { FilmsView } from './films/FilmsView'
import { PeopleView } from './people/PeopleView'
import { PlanetsView } from './planets/PlanetsView'
import { SpeciesView } from './species/SpeciesView'
import { StarshipsView } from './starships/StarshipsView'
import { VehiclesView } from './vehicles/VehiclesView'

export function ResourcesView (): ReactElement {
  const params = useParams()
  const resourceType = params.resourceType as ResourceType
  logRouteParams(params)
  switch (resourceType) {
    case ResourceType.Films:
      return <FilmsView />
    case ResourceType.People:
      return <PeopleView />
    case ResourceType.Planets:
      return <PlanetsView />
    case ResourceType.Species:
      return <SpeciesView />
    case ResourceType.Starships:
      return <StarshipsView />
    case ResourceType.Vehicles:
      return <VehiclesView />
  }
}
