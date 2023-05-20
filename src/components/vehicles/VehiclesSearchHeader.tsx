import React, { type ReactElement, useEffect, type ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from 'antd'
import { type RootState } from '../../redux-functionality/store'
import { type IVehiclesListState } from '../../redux-functionality/list-type'
import { useListQuery } from '../../helpers/queries'
import { ResourceType } from '../../resources/Resources'
import { logListData } from '../../helpers/logger'
import { API_BODY, API_DEFAULT } from '../../helpers/api-common'
import { type IVehicles } from '../../resources/IVehicles'
import { vehiclesListSlice } from '../../redux-functionality/slices/vehicles-list-slice'

const { Search } = Input

export function VehiclesSearchHeader (): ReactElement {
  const { page, pageSize, query } = useSelector<RootState, IVehiclesListState>(
    (state) => state.vehiclesListReducer
  )
  const dispatch = useDispatch()
  const { data, isFetching } = useListQuery<IVehicles>({ resourceType: ResourceType.Vehicles, page, pageSize, query })
  useEffect(() => {
    logListData(data)
    if (data != null) {
      dispatch(vehiclesListSlice.setItems(data.results))
      dispatch(vehiclesListSlice.setCount(data.count))
      dispatch(vehiclesListSlice.setPrevious(data.previous))
      dispatch(vehiclesListSlice.setNext(data.next))
    }
  }, [data, page, pageSize, query])

  function onSearch (value: string): void {
    dispatch(vehiclesListSlice.setPage(API_DEFAULT.list.page))
    dispatch(vehiclesListSlice.setQuery(value))
  }

  function onSearchChange (event: ChangeEvent<HTMLInputElement>): void {
    dispatch(vehiclesListSlice.setPage(API_DEFAULT.list.page))
    dispatch(vehiclesListSlice.setQuery(event.target.value))
  }

  return (
    <Search
      style={{ maxWidth: 400 }}
      autoComplete='off'
      value={query}
      name={API_BODY.list.queryName}
      size='large'
      placeholder="Type to search by name..."
      onSearch={onSearch}
      onChange={onSearchChange}
      allowClear
      enterButton
      loading={isFetching} />
  )
}
