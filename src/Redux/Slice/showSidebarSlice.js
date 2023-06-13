import { createSlice } from '@reduxjs/toolkit'

export const showSidebarSlice = createSlice({
  name: 'showSidebarSlice',
  initialState: {
    value: false,
  },
  reducers: {
   
    setSidebar: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSidebar } = showSidebarSlice.actions

export default showSidebarSlice.reducer