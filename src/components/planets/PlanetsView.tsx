import React, { type ReactElement } from 'react'
import { Alert, Card, Collapse, Descriptions, Row, Skeleton } from 'antd'
import { type IPlanets } from '../../resources/IPlanets'
import { type ResourceType } from '../../resources/Resources'
import { useParams } from 'react-router-dom'
import { logRouteParams, logViewData } from '../../helpers/logger'
import { useViewQuery } from '../../helpers/queries'
import { getFilmsPanel, getPeoplePanel } from '../collapse/panels'
import { CreatedEdited } from '../CreatedEdited'

const { Item } = Descriptions

export function PlanetsView (): ReactElement {
  const params = useParams()
  logRouteParams(params)
  const { data, isFetching } = useViewQuery<IPlanets>({ resourceType: params.resourceType as ResourceType, id: params.resourceId as string })
  logViewData(data)
  if (isFetching) {
    return <Skeleton />
  }
  if (data == null) {
    return <Alert message="Unable to fetch view data" type="error" />
  }
  const {
    climate,
    created,
    diameter,
    edited,
    films,
    gravity,
    name,
    orbital_period: orbitalPeriod,
    population,
    residents,
    rotation_period: rotationPeriod,
    surface_water: surfaceWater,
    terrain
  } = data
  return (
    <Row justify='space-around'>
      <Card title={name}>
        <Descriptions column={{ xs: 1, md: 2 }} layout='vertical' size='small' bordered>
          <Item label="Population">{population}</Item>
          <Item label="Climate">{climate}</Item>
          <Item label="Diameter">{diameter}</Item>
          <Item label="Gravity">{gravity}</Item>
          <Item label="Terrain">{terrain}</Item>
          <Item label="Orbital Period">{orbitalPeriod}</Item>
          <Item label="Rotation Period">{rotationPeriod}</Item>
          <Item label="Surface Water">{surfaceWater}</Item>
        </Descriptions>
        <br />
        <CreatedEdited created={created} edited={edited} />
        <Collapse expandIconPosition='start' size='small'>
          {getFilmsPanel({ films })}
          {getPeoplePanel({ header: 'Residents', people: residents })}
        </Collapse>
      </Card>
    </Row>
  )
}
