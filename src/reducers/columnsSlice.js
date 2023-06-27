import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios';

// export const fetchcolumns = createAsyncThunk(
//     'fetchcolumns',
//     async () => {

//     }
// )

export const columnsSlice = createSlice({
    name: 'columns',
    initialState: {
        columns: 50,
    },
    reducers: {
        setColumns: (state, action) => {
            state.columns = action.payload
        },
    },
    extraReducers: (builder) => {
        // builder.addCase(fetchcolumns.fulfilled, (state, action) => {
        //     state.cities.push(action.payload)
        // })
    },
})

//action creators
export const { setColumns, deleteCity } = columnsSlice.actions

export default columnsSlice.reducer