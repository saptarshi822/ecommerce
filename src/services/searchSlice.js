import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchQuery: '',
  value : 0,
  cartList : []
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    increment : (state) =>{
      state.value += 1
    },
    addtoCart : (state,action) =>{
      state.cartList=[...state.cartList,action.payload]
      
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSearchQuery,increment,addtoCart } = searchSlice.actions

export default searchSlice.reducer;