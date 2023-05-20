import { type IFilms } from './IFilms'
import { type IPeople } from './IPeople'
import { type IPlanets } from './IPlanets'
import { type ISpecies } from './ISpecies'
import { type IStarships } from './IStarships'
import { type IVehicles } from './IVehicles'

export type IResource = IFilms | IPeople | IPlanets | ISpecies | IStarships | IVehicles

export enum ResourceType {
  Films = 'films',
  People = 'people',
  Planets = 'planets',
  Species = 'species',
  Starships = 'starships',
  Vehicles = 'vehicles',
}

export interface IResourcesList<T extends IResource> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}
