/* eslint-disable @typescript-eslint/no-explicit-any */
import { movieSlice } from '@/app/(site)/profiles/movieSlice';
import { movieApi, movieDetailApi } from '@/app/(site)/profiles/services';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { rtkQueryErrorLogger } from './middleware';

const rootReducer = combineReducers({
  user: movieSlice.reducer,
  [movieApi.reducerPath]: movieApi.reducer,
  [movieDetailApi.reducerPath]: movieDetailApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(rtkQueryErrorLogger)
      .concat(movieApi.middleware, movieDetailApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
