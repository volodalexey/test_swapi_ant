import React, { type ReactElement } from 'react'
import { type IPeople } from '../../resources/IPeople'
import { Alert, Card, Collapse, Descriptions, Row, Skeleton } from 'antd'
import { Link, useParams } from 'react-router-dom'
import { logRouteParams, logViewData } from '../../helpers/logger'
import { useViewQuery } from '../../helpers/queries'
import { getFilmsPanel, getSpeciesPanel, getStarshipsPanel, getVehiclesPanel } from '../collapse/panels'
import { type ResourceType } from '../../resources/Resources'
import { FULL_CLIENT_PATH } from '../../routes/client-path'
import { extractItemId } from '../../helpers/parse'
import { CreatedEdited } from '../CreatedEdited'

const { Item } = Descriptions

export function PeopleView (): ReactElement {
  const params = useParams()
  logRouteParams(params)
  const { data, isFetching } = useViewQuery<IPeople>({ resourceType: params.resourceType as ResourceType, id: params.resourceId as string })
  logViewData(data)
  if (isFetching) {
    return <Skeleton />
  }
  if (data == null) {
    return <Alert message="Unable to fetch view data" type="error" />
  }
  const {
    birth_year: birthYear,
    eye_color: eyeColor,
    films,
    gender,
    hair_color: hairColor,
    height,
    homeworld,
    mass,
    name,
    skin_color: skinColor,
    created,
    edited,
    species,
    starships,
    vehicles
  } = data
  return (
    <Row justify='space-around'>
      <Card title={name}>
        <Descriptions column={{ xs: 1, md: 2 }} layout='vertical' size='small' bordered>
          <Item label="Birth Year">{birthYear}</Item>
          <Item label="Gender">{gender}</Item>
          <Item label="Height">{height}</Item>
          <Item label="Mass">{mass}</Item>
          <Item label="Eye Color">{eyeColor}</Item>
          <Item label="Hair Color">{hairColor}</Item>
          <Item label="Skin Color">{skinColor}</Item>
        </Descriptions>
        <br />
        <Descriptions column={1}>
          <Item label="Homeworld">
            <Link to={`${FULL_CLIENT_PATH.planetsView$}/${extractItemId(homeworld)}`}>
              {homeworld}
            </Link>
          </Item>
        </Descriptions>
        <CreatedEdited created={created} edited={edited} />
        <Collapse expandIconPosition='start' size='small'>
          {getFilmsPanel({ films })}
          {getSpeciesPanel({ species })}
          {getStarshipsPanel({ starships })}
          {getVehiclesPanel({ vehicles })}
        </Collapse>
      </Card>
    </Row>
  )
}
