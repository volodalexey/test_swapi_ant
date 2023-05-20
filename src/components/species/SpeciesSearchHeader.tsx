import React, { type ReactElement, useEffect, type ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from 'antd'
import { type RootState } from '../../redux-functionality/store'
import { type ISpeciesListState } from '../../redux-functionality/list-type'
import { useListQuery } from '../../helpers/queries'
import { ResourceType } from '../../resources/Resources'
import { logListData } from '../../helpers/logger'
import { API_BODY, API_DEFAULT } from '../../helpers/api-common'
import { type ISpecies } from '../../resources/ISpecies'
import { speciesListSlice } from '../../redux-functionality/slices/species-list-slice'

const { Search } = Input

export function SpeciesSearchHeader (): ReactElement {
  const { page, pageSize, query } = useSelector<RootState, ISpeciesListState>(
    (state) => state.speciesListReducer
  )
  const dispatch = useDispatch()
  const { data, isFetching } = useListQuery<ISpecies>({ resourceType: ResourceType.Species, page, pageSize, query })
  useEffect(() => {
    logListData(data)
    if (data != null) {
      dispatch(speciesListSlice.setItems(data.results))
      dispatch(speciesListSlice.setCount(data.count))
      dispatch(speciesListSlice.setPrevious(data.previous))
      dispatch(speciesListSlice.setNext(data.next))
    }
  }, [data, page, pageSize, query])

  function onSearch (value: string): void {
    dispatch(speciesListSlice.setPage(API_DEFAULT.list.page))
    dispatch(speciesListSlice.setQuery(value))
  }

  function onSearchChange (event: ChangeEvent<HTMLInputElement>): void {
    dispatch(speciesListSlice.setPage(API_DEFAULT.list.page))
    dispatch(speciesListSlice.setQuery(event.target.value))
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
