import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type InitialMenuState, SetMenuAction } from '../menu-type'

const initialState: InitialMenuState = {
  collapsed: !(innerWidth > 500)
}

export const menuSlice = createSlice({
  name: SetMenuAction,
  initialState,
  reducers: {
    setCollapsed: (state, action: PayloadAction<boolean>) => {
      state.collapsed = action.payload
    }
  }
})

export const { setCollapsed } = menuSlice.actions
export const menuReducer = menuSlice.reducer
