import {createAsyncThunk}
  from "@reduxjs/toolkit";
import * as service
  from "./tuits-service";

export const findTuitsThunk = createAsyncThunk(
  'tuits/findTuits', async () =>
    await service.findTuits()
);
export const createTuitThunk = createAsyncThunk(
  'tuits/createTuit', async (tuit) =>
    await service.createTuit(tuit)
)

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit', async (tuit) =>
    await service.deleteTuit(tuit)
);
   
export const updateTuitThunk =
  createAsyncThunk(
    'tuits/updateTuit',
    async (tuit) =>
      await service.updateTuit(tuit)
)