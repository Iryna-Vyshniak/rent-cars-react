import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { getAllCars } from './carsThunk';
import { carsInitialState } from './carsInitialState';

const customArrThunks = [getAllCars];

const status = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected'
};

const fn = status => customArrThunks.map(el => el[status]);

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialState,
  reducers: {
    setToFavorites: (state, { payload }) => {
      const carToAdd = state.items.find(car => car.id === payload.id);
      if (carToAdd) {
        state.favorites.push(carToAdd);
      }
    },
    removeFromFavorites: (state, { payload }) => {
      const indexToRemove = state.favorites.findIndex(car => car.id === payload.id);
      if (indexToRemove !== -1) {
        state.favorites.splice(indexToRemove, 1);
      }
    },
    setFilter(state, { payload }) {
      state.filter = payload;
    },
    resetFilter: state => {
      state.filter = null;
    }
  },
  extraReducers: builder => {
    const { pending, rejected } = status;

    builder
      .addCase(getAllCars.fulfilled, handleFulfilled)
      .addMatcher(isAnyOf(...fn(pending)), handlePending)
      .addMatcher(isAnyOf(...fn(rejected)), handleRejected);
  }
});

export const { setToFavorites, removeFromFavorites, setFilter, resetFilter } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
