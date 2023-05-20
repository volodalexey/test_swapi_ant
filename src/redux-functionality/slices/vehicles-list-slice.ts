import { type IVehicles } from '../../resources/IVehicles'
import { ResourceType } from '../../resources/Resources'
import { type IListSlice, createListSlice } from './list-slice'

export interface IVehiclesListSlice extends IListSlice<IVehicles> {}

export const vehiclesListSlice = createListSlice<IVehicles>(ResourceType.Vehicles)
