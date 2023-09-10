import { combineReducers } from '@reduxjs/toolkit';

import { carsReducer } from './cars/carsSlice';

export const rootReducer = combineReducers({
  cars: carsReducer
});
