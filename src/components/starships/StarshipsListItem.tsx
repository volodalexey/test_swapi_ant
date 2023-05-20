import React, { type ReactElement } from 'react'
import { Card, Collapse, Descriptions, List } from 'antd'
import { type IStarships } from '../../resources/IStarships'
import { getFilmsPanel, getPeoplePanel } from '../collapse/panels'
import { FULL_CLIENT_PATH } from '../../routes/client-path'
import { extractItemId } from '../../helpers/parse'
import { Link } from 'react-router-dom'
import { CreatedEdited } from '../CreatedEdited'

const { Meta } = Card
const { Item } = Descriptions

export function StarshipsListItem ({
  MGLT,
  cargo_capacity: cargoCapacity,
  consumables,
  cost_in_credits: costInCredits,
  created,
  crew,
  edited,
  hyperdrive_rating: hyperdriveRating,
  length,
  manufacturer,
  max_atmosphering_speed: maxAtmospheringSpeed,
  model,
  name,
  passengers,
  films,
  pilots,
  starship_class: starshipClass,
  url
}: IStarships): ReactElement {
  return (
    <List.Item>
      <Card>
        <Meta
          title={<Link to={`${FULL_CLIENT_PATH.starshipsView$}/${extractItemId(url)}`}>
            {name}
          </Link>}
          description={model}
        />
        <br />
        <Descriptions column={2} layout='vertical' size='small' bordered>
          <Item label="MGLT">{MGLT}</Item>
          <Item label="Cargo Capacity">{cargoCapacity}</Item>
          <Item label="Length">{length}</Item>
          <Item label="Hyperdrive Rating">{hyperdriveRating}</Item>
          <Item label="Consumables">{consumables}</Item>
          <Item label="Cost In Credits">{costInCredits}</Item>
          <Item label="Max Atmosphering Speed">{maxAtmospheringSpeed}</Item>
          <Item label="Crew">{crew}</Item>
          <Item label="Passengers">{passengers}</Item>
          <Item label="Manufacturer">{manufacturer}</Item>
          <Item label="Starship Class">{starshipClass}</Item>
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
