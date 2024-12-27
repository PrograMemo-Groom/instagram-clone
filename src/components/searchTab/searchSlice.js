import {createSlice} from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        isOpen: false,
    },
    reducers: {
        toggleSearch: (state) => {
            state.isOpen = !state.isOpen;
        },
        closeSearch: (state) => {
            state.isOpen = false;
        },
    },
});

export const {toggleSearch, closeSearch} = searchSlice.actions;
export default searchSlice.reducer;