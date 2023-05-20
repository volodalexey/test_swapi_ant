import { type IStarships } from '../../resources/IStarships'
import { ResourceType } from '../../resources/Resources'
import { type IListSlice, createListSlice } from './list-slice'

export interface IStarshipsListSlice extends IListSlice<IStarships> {}

export const starshipsListSlice = createListSlice<IStarships>(ResourceType.Starships)
