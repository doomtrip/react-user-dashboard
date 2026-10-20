import { configureStore } from '@reduxjs/toolkit';
import { userApi } from '../shared/api/api';
import favoritesReducer from '../features/favorites/model/favoritesSlice';

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        favorites: favoritesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;