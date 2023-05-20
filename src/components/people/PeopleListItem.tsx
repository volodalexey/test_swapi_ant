import React, { type ReactElement } from 'react'
import { type IPeople } from '../../resources/IPeople'
import { Avatar, Card, Collapse, Descriptions, List } from 'antd'
import { getFilmsPanel, getSpeciesPanel, getStarshipsPanel, getVehiclesPanel } from '../collapse/panels'
import { Link } from 'react-router-dom'
import { FULL_CLIENT_PATH } from '../../routes/client-path'
import { extractItemId } from '../../helpers/parse'
import { CreatedEdited } from '../CreatedEdited'
import { ViewLink } from '../ViewLink'

const { Meta } = Card
const { Item } = Descriptions

export function PeopleListItem ({
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
  url,
  vehicles
}: IPeople): ReactElement {
  return (
    <List.Item>
      <Card>
        <Meta
          avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=${gender}`} />}
          title={<Link to={`${FULL_CLIENT_PATH.peopleView$}/${extractItemId(url)}`}>
            {name}
          </Link>}
          description={birthYear}
        />
        <br />
        <Descriptions column={2} layout='vertical' size='small' bordered>
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
            <ViewLink prepend={FULL_CLIENT_PATH.planetsView$} initialUrl={homeworld} text={homeworld} />
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
    </List.Item>
  )
}
