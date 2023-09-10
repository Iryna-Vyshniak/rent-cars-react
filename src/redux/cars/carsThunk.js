import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllAdverts } from '../../shared/api/adverts';

export const getAllCars = createAsyncThunk('adverts/getAll', async (_, { rejectWithValue }) => {
  try {
    const data = await getAllAdverts();
    return data;
  } catch ({ response }) {
    return rejectWithValue(response.data);
  }
});
