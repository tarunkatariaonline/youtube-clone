
import { createSlice } from '@reduxjs/toolkit'

export const suggestionSlice = createSlice({
  name: 'suggestionSlice',
  initialState: {
  
  },
  reducers: {
   
    setCache: (state, action) => {
    Object.assign(state,action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCache} = suggestionSlice.actions

export default suggestionSlice.reducer