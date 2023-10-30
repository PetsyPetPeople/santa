// imports & thunk action creator omitted

import { createSlice } from '@reduxjs/toolkit';
import { Pokemon } from './pokemonTypes';

type RequestState = 'pending' | 'fulfilled' | 'rejected';

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    dataByName: {} as Record<string, Pokemon | undefined>,
    statusByName: {} as Record<string, RequestState | undefined>,
  },
  reducers: {},
  extraReducers: () => {},
});
