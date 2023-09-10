export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;

export const selectCars = state => state.cars.items;
export const selectFavorites = state => state.cars.favorites;
export const selectFilter = state => state.cars.filter;
