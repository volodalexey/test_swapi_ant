import React, { type ReactElement, useEffect, type ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from 'antd'
import { type RootState } from '../../redux-functionality/store'
import { type IPlanetsListState } from '../../redux-functionality/list-type'
import { useListQuery } from '../../helpers/queries'
import { ResourceType } from '../../resources/Resources'
import { logListData } from '../../helpers/logger'
import { API_BODY, API_DEFAULT } from '../../helpers/api-common'
import { planetsListSlice } from '../../redux-functionality/slices/planets-list-slice'
import { type IPlanets } from '../../resources/IPlanets'

const { Search } = Input

export function PlanetsSearchHeader (): ReactElement {
  const { page, pageSize, query } = useSelector<RootState, IPlanetsListState>(
    (state) => state.planetsListReducer
  )
  const dispatch = useDispatch()
  const { data, isFetching } = useListQuery<IPlanets>({ resourceType: ResourceType.Planets, page, pageSize, query })
  useEffect(() => {
    logListData(data)
    if (data != null) {
      dispatch(planetsListSlice.setItems(data.results))
      dispatch(planetsListSlice.setCount(data.count))
      dispatch(planetsListSlice.setPrevious(data.previous))
      dispatch(planetsListSlice.setNext(data.next))
    }
  }, [data, page, pageSize, query])

  function onSearch (value: string): void {
    dispatch(planetsListSlice.setPage(API_DEFAULT.list.page))
    dispatch(planetsListSlice.setQuery(value))
  }

  function onSearchChange (event: ChangeEvent<HTMLInputElement>): void {
    dispatch(planetsListSlice.setPage(API_DEFAULT.list.page))
    dispatch(planetsListSlice.setQuery(event.target.value))
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
