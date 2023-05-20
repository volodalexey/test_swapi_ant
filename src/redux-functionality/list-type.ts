import { type IFilms } from '../resources/IFilms'
import { type IPeople } from '../resources/IPeople'
import { type IPlanets } from '../resources/IPlanets'
import { type ISpecies } from '../resources/ISpecies'
import { type IStarships } from '../resources/IStarships'
import { type IVehicles } from '../resources/IVehicles'
import { type IResource } from '../resources/Resources'

export interface InitialListState<T extends IResource> {
  page: number
  pageSize: number
  query: string
  next: string | null
  previous: string | null
  count: number
  results: T[]
}

export interface IPeopleListState extends InitialListState<IPeople> {}
export interface IFilmsListState extends InitialListState<IFilms> {}
export interface ISpeciesListState extends InitialListState<ISpecies> {}
export interface IPlanetsListState extends InitialListState<IPlanets> {}
export interface IStarshipsListState extends InitialListState<IStarships> {}
export interface IVehiclesListState extends InitialListState<IVehicles> {}

export type ResourcesListState = IFilmsListState | IPeopleListState | IPlanetsListState | ISpeciesListState | IStarshipsListState | IVehiclesListState
