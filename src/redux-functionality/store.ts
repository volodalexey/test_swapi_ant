import { configureStore } from '@reduxjs/toolkit'
import { peopleListSlice } from './slices/people-list-slice'
import { filmsListSlice } from './slices/films-list-slice'
import { planetsListSlice } from './slices/planets-list-slice'
import { speciesListSlice } from './slices/species-list-slice'
import { starshipsListSlice } from './slices/starships-list-slice'
import { vehiclesListSlice } from './slices/vehicles-list-slice'
import { menuReducer } from './slices/menu-slice'

export const store = configureStore({
  reducer: {
    menuReducer,
    peopleListReducer: peopleListSlice.listReducer,
    filmsListReducer: filmsListSlice.listReducer,
    planetsListReducer: planetsListSlice.listReducer,
    speciesListReducer: speciesListSlice.listReducer,
    starshipsListReducer: starshipsListSlice.listReducer,
    vehiclesListReducer: vehiclesListSlice.listReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
