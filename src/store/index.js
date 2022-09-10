// import { createStore } from "redux";

// const reducerFn = (state = {counter: 0, age: 30}, action) => {
//   if(action.type === 'INCREMENT'){
//     return {counter: state.counter + 10, age: 11}
//   } 
//   else if (action.type === 'DECREMENT')
//   {
//     return {counter: state.counter - 10}
//   }
//   return state;
// }
// const store = createStore(reducerFn)
// export default store;

import { bindActionCreators, configureStore, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0, age: 10},
  reducers: {
    increment(state, action) {
      state.counter +=20
    },
    decrement(state, action) {
      state.counter -=20
    },
    addBy(state, action) {
      state.counter += action.payload
    }
  }
})

 export const actions = counterSlice.actions
 const store = configureStore({
  reducer: counterSlice.reducer
 })
 export default store;