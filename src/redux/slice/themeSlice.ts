import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type themeType = {
  theme: 'light' | 'dark';
};

const themeState: themeType = {
  theme: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: themeState,
  reducers: {
    setTheme(state, action: PayloadAction<'light' | 'dark'>) {
      state.theme = action.payload;
    },
  },
});

export const themeSelector = (state: RootState) => state.themeSlice.theme;
export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
