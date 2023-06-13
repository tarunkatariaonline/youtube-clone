import { configureStore } from '@reduxjs/toolkit'
import showSidebarReducer from '../Redux/Slice/showSidebarSlice'
import suggestionReducer from './Slice/suggestionSlice'
import liveChatReducer from './Slice/liveChatSlice'
export default configureStore({
  reducer: {
   showSidebarReducer,
   suggestionReducer,
   liveChatReducer
  },
})