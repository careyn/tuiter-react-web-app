import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

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
   

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        deleteTuit(state, action) {
            const index = state
               .findIndex(tuit =>
                  tuit.id === action.payload);
            state.splice(index, 1);
          },       
        createTuit(state, action) {
          state.unshift({
            ...action.payload,
            ...templateTuit,
            id: (new Date()).getTime(),
          })
        }
      }
     });
     
export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;