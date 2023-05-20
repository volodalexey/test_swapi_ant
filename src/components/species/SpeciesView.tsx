import React, { type ReactElement } from 'react'
import { Alert, Card, Collapse, Descriptions, Row, Skeleton } from 'antd'
import { type ISpecies } from '../../resources/ISpecies'
import { type ResourceType } from '../../resources/Resources'
import { Link, useParams } from 'react-router-dom'
import { logRouteParams, logViewData } from '../../helpers/logger'
import { useViewQuery } from '../../helpers/queries'
import { getFilmsPanel, getPeoplePanel } from '../collapse/panels'
import { FULL_CLIENT_PATH } from '../../routes/client-path'
import { extractItemId } from '../../helpers/parse'
import { CreatedEdited } from '../CreatedEdited'

const { Item } = Descriptions

export function SpeciesView (): ReactElement {
  const params = useParams()
  logRouteParams(params)
  const { data, isFetching } = useViewQuery<ISpecies>({ resourceType: params.resourceType as ResourceType, id: params.resourceId as string })
  logViewData(data)
  if (isFetching) {
    return <Skeleton />
  }
  if (data == null) {
    return <Alert message="Unable to fetch view data" type="error" />
  }
  const {
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
    skin_colors: skinColors
  } = data
  return (
    <Row justify='space-around'>
      <Card title={name}>
        <Descriptions column={{ xs: 1, md: 2 }} layout='vertical' size='small' bordered>
          <Item label="Classification">{classification}</Item>
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
            <Link to= {`${FULL_CLIENT_PATH.planetsView$}/${extractItemId(homeworld)}`}>
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
    </Row>
  )
}
