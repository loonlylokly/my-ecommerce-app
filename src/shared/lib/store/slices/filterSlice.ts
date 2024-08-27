import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  search: string,
  sort: string
}

const initialState: FilterState = {
  search: '',
  sort: ''
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
  },
});

export const { setSearch, setSort } = filterSlice.actions;
export default filterSlice.reducer;