import { type ISpecies } from '../../resources/ISpecies'
import { ResourceType } from '../../resources/Resources'
import { type IListSlice, createListSlice } from './list-slice'

export interface ISpeciesListSlice extends IListSlice<ISpecies> {}

export const speciesListSlice = createListSlice<ISpecies>(ResourceType.Species)
