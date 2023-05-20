import { type InitialListState } from '../list-type'
import { createSlice, type PayloadAction, type Draft, type Slice, type Reducer, type ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { type ResourceType, type IResource } from '../../resources/Resources'
import { API_DEFAULT } from '../../helpers/api-common'

export interface IListSlice<T extends IResource> {
  listSlice: Slice<InitialListState<T>>
  listReducer: Reducer<InitialListState<T>>
  setPage: ActionCreatorWithPayload<number, 'setList/setPage'>
  setPageSize: ActionCreatorWithPayload<number, 'setList/setPageSize'>
  setQuery: ActionCreatorWithPayload<string, 'setList/setQuery'>
  setItems: ActionCreatorWithPayload<Array<Draft<T>>, 'setList/setItems'>
  setCount: ActionCreatorWithPayload<number, 'setList/setCount'>
  setPrevious: ActionCreatorWithPayload<string | null, 'setList/setPrevious'>
  setNext: ActionCreatorWithPayload<string | null, 'setList/setNext'>
}

export function createListSlice<T extends IResource> (resourceType: ResourceType): {
  listSlice: Slice<InitialListState<T>>
  listReducer: Reducer<InitialListState<T>>
  setPage: ActionCreatorWithPayload<number, `set${ResourceType}List/setPage`>
  setPageSize: ActionCreatorWithPayload<number, `set${ResourceType}List/setPageSize`>
  setQuery: ActionCreatorWithPayload<string, `set${ResourceType}List/setQuery`>
  setItems: ActionCreatorWithPayload<Array<Draft<T>>, `set${ResourceType}List/setItems`>
  setCount: ActionCreatorWithPayload<number, `set${ResourceType}List/setCount`>
  setPrevious: ActionCreatorWithPayload<string | null, `set${ResourceType}List/setPrevious`>
  setNext: ActionCreatorWithPayload<string | null, `set${ResourceType}List/setNext`>
} {
  const initialState: InitialListState<T> = {
    page: API_DEFAULT.list.page,
    pageSize: 10,
    query: '',
    next: null,
    previous: null,
    count: 0,
    results: []
  }

  const listSlice = createSlice({
    name: `set${resourceType}List`,
    initialState,
    reducers: {
      setPage: (state, action: PayloadAction<number>) => {
        state.page = action.payload
      },
      setPageSize: (state, action: PayloadAction<number>) => {
        state.pageSize = action.payload
      },
      setQuery: (state, action: PayloadAction<string>) => {
        state.query = action.payload
      },
      setItems: (state, action: PayloadAction<Array<Draft<T>>>) => {
        state.results = action.payload
      },
      setCount: (state, action: PayloadAction<number>) => {
        state.count = action.payload
      },
      setPrevious: (state, action: PayloadAction<string | null>) => {
        state.previous = action.payload
      },
      setNext: (state, action: PayloadAction<string | null>) => {
        state.next = action.payload
      }
    }
  })

  const { setPage, setPageSize, setQuery, setItems, setCount, setPrevious, setNext } = listSlice.actions
  const listReducer = listSlice.reducer

  return {
    listSlice, listReducer, setPage, setPageSize, setQuery, setItems, setCount, setPrevious, setNext
  }
}
