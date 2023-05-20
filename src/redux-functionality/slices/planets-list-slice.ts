import { type IPlanets } from '../../resources/IPlanets'
import { ResourceType } from '../../resources/Resources'
import { type IListSlice, createListSlice } from './list-slice'

export interface IPlanetsListSlice extends IListSlice<IPlanets> {}

export const planetsListSlice = createListSlice<IPlanets>(ResourceType.Planets)
