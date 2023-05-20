import { type IPeople } from '../../resources/IPeople'
import { ResourceType } from '../../resources/Resources'
import { type IListSlice, createListSlice } from './list-slice'

export interface IPeopleListSlice extends IListSlice<IPeople> {}

export const peopleListSlice = createListSlice<IPeople>(ResourceType.People)
