import React, { type ReactElement, useEffect, type ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from 'antd'
import { type RootState } from '../../redux-functionality/store'
import { type IFilmsListState } from '../../redux-functionality/list-type'
import { useListQuery } from '../../helpers/queries'
import { type IFilms } from '../../resources/IFilms'
import { ResourceType } from '../../resources/Resources'
import { logListData } from '../../helpers/logger'
import { filmsListSlice } from '../../redux-functionality/slices/films-list-slice'
import { API_BODY, API_DEFAULT } from '../../helpers/api-common'

const { Search } = Input

export function FilmsSearchHeader (): ReactElement {
  const { page, pageSize, query } = useSelector<RootState, IFilmsListState>(
    (state) => state.filmsListReducer
  )
  const dispatch = useDispatch()
  const { data, isFetching } = useListQuery<IFilms>({ resourceType: ResourceType.Films, page, pageSize, query })
  useEffect(() => {
    logListData(data)
    if (data != null) {
      dispatch(filmsListSlice.setItems(data.results))
      dispatch(filmsListSlice.setCount(data.count))
      dispatch(filmsListSlice.setPrevious(data.previous))
      dispatch(filmsListSlice.setNext(data.next))
    }
  }, [data, page, pageSize, query])

  function onSearch (value: string): void {
    dispatch(filmsListSlice.setPage(API_DEFAULT.list.page))
    dispatch(filmsListSlice.setQuery(value))
  }

  function onSearchChange (event: ChangeEvent<HTMLInputElement>): void {
    dispatch(filmsListSlice.setPage(API_DEFAULT.list.page))
    dispatch(filmsListSlice.setQuery(event.target.value))
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
