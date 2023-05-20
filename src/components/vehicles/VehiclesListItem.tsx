import React, { type ReactElement } from 'react'
import { Card, Collapse, Descriptions, List } from 'antd'
import { type IVehicles } from '../../resources/IVehicles'
import { getFilmsPanel, getPeoplePanel } from '../collapse/panels'
import { Link } from 'react-router-dom'
import { FULL_CLIENT_PATH } from '../../routes/client-path'
import { extractItemId } from '../../helpers/parse'
import { CreatedEdited } from '../CreatedEdited'

const { Meta } = Card
const { Item } = Descriptions

export function VehiclesListItem ({
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
  url,
  vehicle_class: vehicleClass
}: IVehicles): ReactElement {
  return (
    <List.Item>
      <Card>
        <Meta
          title={<Link to={`${FULL_CLIENT_PATH.vehiclesView$}/${extractItemId(url)}`}>
            {name}
          </Link>}
          description={model}
        />
        <br />
        <Descriptions column={2} layout='vertical' size='small' bordered>
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
    </List.Item>
  )
}
