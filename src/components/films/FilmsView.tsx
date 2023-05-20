import React, { type ReactElement } from 'react'
import { Alert, Card, Collapse, Descriptions, Row, Skeleton, Typography } from 'antd'
import { type IFilms } from '../../resources/IFilms'
import { type ResourceType } from '../../resources/Resources'
import { useParams } from 'react-router-dom'
import { logRouteParams, logViewData } from '../../helpers/logger'
import { useViewQuery } from '../../helpers/queries'
import { getPeoplePanel, getPlanetsPanel, getSpeciesPanel, getStarshipsPanel, getVehiclesPanel } from '../collapse/panels'
import { CreatedEdited } from '../CreatedEdited'

const { Panel } = Collapse
const { Item } = Descriptions
const { Text } = Typography

export function FilmsView (): ReactElement {
  const params = useParams()
  logRouteParams(params)
  const { data, isFetching } = useViewQuery<IFilms>({ resourceType: params.resourceType as ResourceType, id: params.resourceId as string })
  logViewData(data)
  if (isFetching) {
    return <Skeleton />
  }
  if (data == null) {
    return <Alert message="Unable to fetch view data" type="error" />
  }
  const {
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
    vehicles
  } = data
  return (
    <Row justify='space-around'>
      <Card title={title} style={{ maxWidth: 800 }}>
        <Collapse expandIconPosition='end'>
          <Panel header='Opening Crawl' key='openingCrawl'>
            <Text type="warning">{openingCrawl}</Text>
          </Panel>
        </Collapse>
        <br />
        <Descriptions column={{ xs: 1, md: 2 }} layout='vertical' size='small' bordered>
          <Item label="Episode Id">{episodeId}</Item>
          <Item label="Director">{director}</Item>
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
    </Row>
  )
}
