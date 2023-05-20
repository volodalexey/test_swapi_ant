import React, { type ReactElement } from 'react'
import { Alert, Card, Collapse, Descriptions, Row, Skeleton } from 'antd'
import { type IVehicles } from '../../resources/IVehicles'
import { type ResourceType } from '../../resources/Resources'
import { useParams } from 'react-router-dom'
import { logRouteParams, logViewData } from '../../helpers/logger'
import { useViewQuery } from '../../helpers/queries'
import { getFilmsPanel, getPeoplePanel } from '../collapse/panels'
import { CreatedEdited } from '../CreatedEdited'

const { Item } = Descriptions

export function VehiclesView (): ReactElement {
  const params = useParams()
  logRouteParams(params)
  const { data, isFetching } = useViewQuery<IVehicles>({ resourceType: params.resourceType as ResourceType, id: params.resourceId as string })
  logViewData(data)
  if (isFetching) {
    return <Skeleton />
  }
  if (data == null) {
    return <Alert message="Unable to fetch view data" type="error" />
  }
  const {
    cargo_capacity: cargoCapacity,
    consumables,
    cost_in_credits: costInCredits,
    created,
    crew,
    edited,
    length,
    manufacturer,
    max_atmosphering_speed: maxAtmospheringSpeed,
    model,
    name,
    passengers,
    pilots,
    films,
    vehicle_class: vehicleClass
  } = data
  return (
    <Row justify='space-around'>
      <Card title={name}>
        <Descriptions column={{ xs: 1, md: 2 }} layout='vertical' size='small' bordered>
          <Item label="Model">{model}</Item>
          <Item label="Cargo Capacity">{cargoCapacity}</Item>
          <Item label="Length">{length}</Item>
          <Item label="Consumables">{consumables}</Item>
          <Item label="Cost In Credits">{costInCredits}</Item>
          <Item label="Max Atmosphering Speed">{maxAtmospheringSpeed}</Item>
          <Item label="Crew">{crew}</Item>
          <Item label="Passengers">{passengers}</Item>
          <Item label="Manufacturer">{manufacturer}</Item>
          <Item label="Vehicle Class">{vehicleClass}</Item>
        </Descriptions>
        <br />
        <CreatedEdited created={created} edited={edited} />
        <Collapse expandIconPosition='start' size='small'>
          {getFilmsPanel({ films })}
          {getPeoplePanel({ header: 'Pilots', people: pilots })}
        </Collapse>
      </Card>
    </Row>
  )
}
