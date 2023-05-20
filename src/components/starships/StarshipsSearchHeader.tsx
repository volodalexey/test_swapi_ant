import React, { type ReactElement, useEffect, type ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from 'antd'
import { type RootState } from '../../redux-functionality/store'
import { type IStarshipsListState } from '../../redux-functionality/list-type'
import { useListQuery } from '../../helpers/queries'
import { ResourceType } from '../../resources/Resources'
import { logListData } from '../../helpers/logger'
import { API_BODY, API_DEFAULT } from '../../helpers/api-common'
import { type IStarships } from '../../resources/IStarships'
import { starshipsListSlice } from '../../redux-functionality/slices/starships-list-slice'

const { Search } = Input

export function StarshipsSearchHeader (): ReactElement {
  const { page, pageSize, query } = useSelector<RootState, IStarshipsListState>(
    (state) => state.starshipsListReducer
  )
  const dispatch = useDispatch()
  const { data, isFetching } = useListQuery<IStarships>({ resourceType: ResourceType.Starships, page, pageSize, query })
  useEffect(() => {
    logListData(data)
    if (data != null) {
      dispatch(starshipsListSlice.setItems(data.results))
      dispatch(starshipsListSlice.setCount(data.count))
      dispatch(starshipsListSlice.setPrevious(data.previous))
      dispatch(starshipsListSlice.setNext(data.next))
    }
  }, [data, page, pageSize, query])

  function onSearch (value: string): void {
    dispatch(starshipsListSlice.setPage(API_DEFAULT.list.page))
    dispatch(starshipsListSlice.setQuery(value))
  }

  function onSearchChange (event: ChangeEvent<HTMLInputElement>): void {
    dispatch(starshipsListSlice.setPage(API_DEFAULT.list.page))
    dispatch(starshipsListSlice.setQuery(event.target.value))
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
