import { createSlice } from '@reduxjs/toolkit';

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    value: 'English',
  },
  reducers: {
    toggleToArabic: state => {
      state.value = 'Arabic';
    },
    toggleToEnglish: state => {
      state.value = 'English';
    },
  },
});

export const { toggleToArabic, toggleToEnglish } = languageSlice.actions;

export const selectLanguage = state => state.language.value;

export default languageSlice.reducer;
