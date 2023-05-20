import React, { type ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List } from 'antd'
import { type RootState } from '../../redux-functionality/store'
import { type IPlanetsListState } from '../../redux-functionality/list-type'
import { planetsListSlice } from '../../redux-functionality/slices/planets-list-slice'
import { PlanetsListItem } from './PlanetsListItem'
import { useListQuery } from '../../helpers/queries'
import { ResourceType } from '../../resources/Resources'

export function PlanetsList (): ReactElement {
  const { page, pageSize, query, count, results } = useSelector<RootState, IPlanetsListState>(
    (state) => state.planetsListReducer
  )
  const dispatch = useDispatch()
  const { isFetching } = useListQuery({ resourceType: ResourceType.Planets, page, pageSize, query })

  function onPaginationChange (page: number, pageSize: number): void {
    dispatch(planetsListSlice.setPage(page))
    dispatch(planetsListSlice.setPageSize(pageSize))
  }
  const gutter = 16
  return (
    <List
      loading={isFetching}
      style={{ padding: `${gutter / 2}px` }}
      pagination={{
        style: { marginBottom: `${gutter / 2}px` },
        position: 'top',
        align: 'center',
        current: page,
        total: count,
        onChange: onPaginationChange,
        showSizeChanger: false,
        showQuickJumper: true
      }}
      grid={{
        gutter,
        xs: 1,
        sm: 1,
        md: 2,
        lg: 2,
        xl: 3,
        xxl: 4
      }}
      dataSource={results}
      renderItem={PlanetsListItem}
    />
  )
}
