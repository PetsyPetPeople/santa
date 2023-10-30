import { ELoading } from '@/constants';
import { createSlice } from '@reduxjs/toolkit';
import { IMovieState } from './types';

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    entities: [],
    loading: ELoading.IDLE,
    currentRequestId: undefined,
    error: null,
  } as IMovieState,
  reducers: {},
  extraReducers: () => {},
});
