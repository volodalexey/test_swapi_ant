import { type IFilms } from '../../resources/IFilms'
import { ResourceType } from '../../resources/Resources'
import { type IListSlice, createListSlice } from './list-slice'

export interface IFilmsListSlice extends IListSlice<IFilms> {}

export const filmsListSlice = createListSlice<IFilms>(ResourceType.Films)
