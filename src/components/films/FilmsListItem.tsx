import React, { type ReactElement } from 'react'
import { Card, Collapse, Descriptions, List, Typography } from 'antd'
import { type IFilms } from '../../resources/IFilms'
import { Link } from 'react-router-dom'
import { FULL_CLIENT_PATH } from '../../routes/client-path'
import { extractItemId } from '../../helpers/parse'
import { getPeoplePanel, getPlanetsPanel, getSpeciesPanel, getStarshipsPanel, getVehiclesPanel } from '../collapse/panels'
import { CreatedEdited } from '../CreatedEdited'

const { Meta } = Card
const { Panel } = Collapse
const { Item } = Descriptions
const { Text } = Typography

export function FilmsListItem ({
  characters,
  created,
  director,
  edited,
  episode_id: episodeId,
  opening_crawl: openingCrawl,
  planets,
  producer,
  release_date: releaseDate,
  species,
  starships,
  title,
  url,
  vehicles
}: IFilms): ReactElement {
  return (
    <List.Item>
      <Card>
        <Meta
          title={<Link to={`${FULL_CLIENT_PATH.filmsView$}/${extractItemId(url)}`}>
            {title}
          </Link>}
          description={director}
        />
        <br />
        <Collapse expandIconPosition='end'>
          <Panel header='Opening Crawl' key='openingCrawl'>
            <Text type="warning">{openingCrawl}</Text>
          </Panel>
        </Collapse>
        <br />
        <Descriptions column={2} layout='vertical' size='small' bordered>
          <Item label="Episode Id">{episodeId}</Item>
          <Item label="Producer">{producer}</Item>
        </Descriptions>
        <br />
        <Descriptions column={1}>
          <Item label="Release Date">{releaseDate}</Item>
        </Descriptions>
        <CreatedEdited created={created} edited={edited} />
        <Collapse expandIconPosition='start' size='small'>
          {getPeoplePanel({ header: 'Characters', people: characters })}
          {getPlanetsPanel({ planets })}
          {getSpeciesPanel({ species })}
          {getStarshipsPanel({ starships })}
          {getVehiclesPanel({ vehicles })}
        </Collapse>
      </Card>
    </List.Item>
  )
}
