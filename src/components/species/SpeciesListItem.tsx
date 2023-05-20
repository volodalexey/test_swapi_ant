import React, { type ReactElement } from 'react'
import { Card, Collapse, Descriptions, List } from 'antd'
import { type ISpecies } from '../../resources/ISpecies'
import { getFilmsPanel, getPeoplePanel } from '../collapse/panels'
import { Link } from 'react-router-dom'
import { FULL_CLIENT_PATH } from '../../routes/client-path'
import { extractItemId } from '../../helpers/parse'
import { CreatedEdited } from '../CreatedEdited'

const { Meta } = Card
const { Item } = Descriptions

export function SpeciesListItem ({
  average_height: averageHeight,
  average_lifespan: averageLifespan,
  classification,
  created,
  designation,
  edited,
  eye_colors: eyeColors,
  hair_colors: hairColors,
  homeworld,
  language,
  name,
  people,
  films,
  skin_colors: skinColors,
  url
}: ISpecies): ReactElement {
  return (
    <List.Item>
      <Card>
        <Meta
          title={<Link to={`${FULL_CLIENT_PATH.speciesView$}/${extractItemId(url)}`}>
            {name}
          </Link>}
          description={classification}
        />
        <br />
        <Descriptions column={2} layout='vertical' size='small' bordered>
          <Item label="Average Height">{averageHeight}</Item>
          <Item label="Average Lifespan">{averageLifespan}</Item>
          <Item label="Designation">{designation}</Item>
          <Item label="Eye Colors">{eyeColors}</Item>
          <Item label="Hair Colors">{hairColors}</Item>
          <Item label="Skin Colors">{skinColors}</Item>
          <Item label="language">{language}</Item>
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
          {getPeoplePanel({ people })}
          {getFilmsPanel({ films })}
        </Collapse>
      </Card>
    </List.Item>
  )
}
