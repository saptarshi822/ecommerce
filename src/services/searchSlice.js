import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchQuery: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSearchQuery } = searchSlice.actions

export default searchSlice.reducer;