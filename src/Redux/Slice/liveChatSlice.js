import { createSlice } from '@reduxjs/toolkit'

export const liveChatSlice = createSlice({
  name: 'liveChatSlice',
  initialState: {
    comment:[
     
    ]
  },
  reducers: {
   
    setLiveComment: (state, action) => {
      state.comment.unshift(action.payload)
      if(state.comment.length>=20){
       state.comment=  state.comment.slice(1,15)
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLiveComment } = liveChatSlice.actions

export default liveChatSlice.reducer