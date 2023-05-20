import React, { type ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List } from 'antd'
import { type RootState } from '../../redux-functionality/store'
import { type IVehiclesListState } from '../../redux-functionality/list-type'
import { vehiclesListSlice } from '../../redux-functionality/slices/vehicles-list-slice'
import { VehiclesListItem } from './VehiclesListItem'
import { useListQuery } from '../../helpers/queries'
import { ResourceType } from '../../resources/Resources'

export function VehiclesList (): ReactElement {
  const { page, pageSize, query, count, results } = useSelector<RootState, IVehiclesListState>(
    (state) => state.vehiclesListReducer
  )
  const dispatch = useDispatch()
  const { isFetching } = useListQuery({ resourceType: ResourceType.Vehicles, page, pageSize, query })

  function onPaginationChange (page: number, pageSize: number): void {
    dispatch(vehiclesListSlice.setPage(page))
    dispatch(vehiclesListSlice.setPageSize(pageSize))
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
      renderItem={VehiclesListItem}
    />
  )
}
