import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCurrencyData = createAsyncThunk("Home/getCurrencyData", async () => {
    const response = await axios.get('https://finans.truncgil.com/v4/today.json');
    return response.data;
});

export const HomeSlice = createSlice({
    name: "Home",
    initialState: {
        currencyData: {}
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getCurrencyData.fulfilled, (state, action) => {
            state.currencyData = action.payload;
        });
    }
})

export default HomeSlice.reducer