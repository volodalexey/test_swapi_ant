import React, { type ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List } from 'antd'
import { type RootState } from '../../redux-functionality/store'
import { type IFilmsListState } from '../../redux-functionality/list-type'
import { filmsListSlice } from '../../redux-functionality/slices/films-list-slice'
import { FilmsListItem } from './FilmsListItem'
import { ResourceType } from '../../resources/Resources'
import { useListQuery } from '../../helpers/queries'

export function FilmsList (): ReactElement {
  const { page, pageSize, query, count, results } = useSelector<RootState, IFilmsListState>(
    (state) => state.filmsListReducer
  )
  const dispatch = useDispatch()
  const { isFetching } = useListQuery({ resourceType: ResourceType.Films, page, pageSize, query })

  function onPaginationChange (page: number, pageSize: number): void {
    dispatch(filmsListSlice.setPage(page))
    dispatch(filmsListSlice.setPageSize(pageSize))
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
      renderItem={FilmsListItem}
    />
  )
}
