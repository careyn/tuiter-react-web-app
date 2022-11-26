import { createSlice } from "@reduxjs/toolkit";
import {deleteTuitThunk, findTuitsThunk, createTuitThunk, updateTuitThunk}
   from "../../services/tuits-thunks";

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "../../images/nasa.webp",
   };
   
const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
   }
 
 const initialState = {
    tuits: [],
    loading: false
 }
 
 const tuitsSlice = createSlice({
  name: 'tuits',
  initialState,
  extraReducers: {
    [findTuitsThunk.pending]:
       (state) => {
          state.loading = true
          state.tuits = []
    },
    [findTuitsThunk.fulfilled]:
       (state, { payload }) => {
          state.loading = false
          state.tuits = payload
    },
    [findTuitsThunk.rejected]:
       (state) => {
          state.loading = false
    },
    [deleteTuitThunk.fulfilled]:
       (state, { payload }) => {
         state.loading = false
         console.log(payload)
         const index = state.tuits.map((tuit) => tuit._id).indexOf(payload._id);
         console.log(index)
         state.tuits.splice(index, 1)
    },
    [createTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tuits.push({...templateTuit, ...payload})
    },
    [updateTuitThunk.fulfilled]:
      (state, { payload }) => {
      state.loading = false
      const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
      state.tuits[tuitNdx] = payload
}


  },
});
     
export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;