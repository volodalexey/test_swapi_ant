import React, { Fragment, type ReactElement } from 'react'
import { Collapse, Divider } from 'antd'
import {
  TeamOutlined,
  VideoCameraOutlined,
  CarOutlined,
  DeploymentUnitOutlined,
  GlobalOutlined,
  DingtalkOutlined
} from '@ant-design/icons'
import { ResourceType } from '../../resources/Resources'
import { Link } from 'react-router-dom'
import { extractItemId } from '../../helpers/parse'
import { FULL_CLIENT_PATH } from '../../routes/client-path'

const { Panel } = Collapse

function convertToLinks (startUrl: string, items: string[]): ReactElement[] {
  return items.map((item, idx): ReactElement => {
    const itemId = extractItemId(item)
    if (idx < items.length - 1) {
      return <Fragment key={itemId}>
        <Link to={`${startUrl}/${itemId}`}>
          {itemId}
        </Link>
        <Divider type='vertical' />
      </Fragment>
    }
    return <Link key={itemId} to={`${startUrl}/${itemId}`}>
      {itemId}
    </Link>
  })
}

export function getPeoplePanel ({ header = 'People', people }: { header?: string, people: string[] }): ReactElement | null {
  if (Array.isArray(people) && people.length > 0) {
    return <Panel header={`${header} (${people.length})`} key={ResourceType.People} extra={<TeamOutlined />}>
      {convertToLinks(FULL_CLIENT_PATH.peopleView$, people)}
    </Panel>
  }
  return null
}

export function getFilmsPanel ({ header = 'Films', films }: { header?: string, films: string[] }): ReactElement | null {
  if (Array.isArray(films) && films.length > 0) {
    return <Panel header={`${header} (${films.length})`} key={ResourceType.Films} extra={<VideoCameraOutlined />}>
      {convertToLinks(FULL_CLIENT_PATH.filmsView$, films)}
    </Panel>
  }
  return null
}

export function getPlanetsPanel ({ header = 'Planets', planets }: { header?: string, planets: string[] }): ReactElement | null {
  if (Array.isArray(planets) && planets.length > 0) {
    return <Panel header={`${header} (${planets.length})`} key={ResourceType.Planets} extra={<GlobalOutlined />}>
      {convertToLinks(FULL_CLIENT_PATH.planetsView$, planets)}
    </Panel>
  }
  return null
}

export function getSpeciesPanel ({ header = 'Species', species }: { header?: string, species: string[] }): ReactElement | null {
  if (Array.isArray(species) && species.length > 0) {
    return <Panel header={`${header} (${species.length})`} key={ResourceType.Species} extra={<DeploymentUnitOutlined />}>
      {convertToLinks(FULL_CLIENT_PATH.speciesView$, species)}
    </Panel>
  }
  return null
}

export function getStarshipsPanel ({ header = 'Starships', starships }: { header?: string, starships: string[] }): ReactElement | null {
  if (Array.isArray(starships) && starships.length > 0) {
    return <Panel header={`${header} (${starships.length})`} key={ResourceType.Starships} extra={<DingtalkOutlined />}>
      {convertToLinks(FULL_CLIENT_PATH.starshipsView$, starships)}
    </Panel>
  }
  return null
}

export function getVehiclesPanel ({ header = 'Vehicles', vehicles }: { header?: string, vehicles: string[] }): ReactElement | null {
  if (Array.isArray(vehicles) && vehicles.length > 0) {
    return <Panel header={`${header} (${vehicles.length})`} key={ResourceType.Vehicles} extra={<CarOutlined />}>
      {convertToLinks(FULL_CLIENT_PATH.vehiclesView$, vehicles)}
    </Panel>
  }
  return null
}
