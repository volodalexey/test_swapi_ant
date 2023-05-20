import React, { type ReactElement, useEffect, type ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from 'antd'
import { type RootState } from '../../redux-functionality/store'
import { type IPeopleListState } from '../../redux-functionality/list-type'
import { useListQuery } from '../../helpers/queries'
import { ResourceType } from '../../resources/Resources'
import { logListData } from '../../helpers/logger'
import { API_BODY, API_DEFAULT } from '../../helpers/api-common'
import { type IPeople } from '../../resources/IPeople'
import { peopleListSlice } from '../../redux-functionality/slices/people-list-slice'

const { Search } = Input

export function PeopleSearchHeader (): ReactElement {
  const { page, pageSize, query } = useSelector<RootState, IPeopleListState>(
    (state) => state.peopleListReducer
  )
  const dispatch = useDispatch()
  const { data, isFetching } = useListQuery<IPeople>({ resourceType: ResourceType.People, page, pageSize, query })
  useEffect(() => {
    logListData(data)
    if (data != null) {
      dispatch(peopleListSlice.setItems(data.results))
      dispatch(peopleListSlice.setCount(data.count))
      dispatch(peopleListSlice.setPrevious(data.previous))
      dispatch(peopleListSlice.setNext(data.next))
    }
  }, [data, page, pageSize, query])

  function onSearch (value: string): void {
    dispatch(peopleListSlice.setPage(API_DEFAULT.list.page))
    dispatch(peopleListSlice.setQuery(value))
  }

  function onSearchChange (event: ChangeEvent<HTMLInputElement>): void {
    dispatch(peopleListSlice.setPage(API_DEFAULT.list.page))
    dispatch(peopleListSlice.setQuery(event.target.value))
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
