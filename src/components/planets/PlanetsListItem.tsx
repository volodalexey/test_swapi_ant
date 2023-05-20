import React, { type ReactElement } from 'react'
import { Card, Collapse, Descriptions, List } from 'antd'
import { type IPlanets } from '../../resources/IPlanets'
import { Link } from 'react-router-dom'
import { FULL_CLIENT_PATH } from '../../routes/client-path'
import { extractItemId } from '../../helpers/parse'
import { getFilmsPanel, getPeoplePanel } from '../collapse/panels'
import { CreatedEdited } from '../CreatedEdited'

const { Meta } = Card
const { Item } = Descriptions

export function PlanetsListItem ({
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
  terrain,
  url
}: IPlanets): ReactElement {
  return (
    <List.Item>
      <Card>
        <Meta
          title={<Link to={`${FULL_CLIENT_PATH.planetsView$}/${extractItemId(url)}`}>
            {name}
          </Link>}
          description={population}
        />
        <br />
        <Descriptions column={2} layout='vertical' size='small' bordered>
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
    </List.Item>
  )
}
