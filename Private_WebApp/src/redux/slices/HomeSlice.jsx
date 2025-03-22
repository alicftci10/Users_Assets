import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api_url = "https://localhost:7087/api";
const data = JSON.parse(localStorage.getItem('userData'));

export const getCurrencyData = createAsyncThunk("Home/getCurrencyData", async (_, { dispatch }) => {
    const response = await axios.get('https://finans.truncgil.com/v4/today.json');
    if (response.data) {
        dispatch(getHomeGoldList(response.data.GRA.Selling));
    }
    return response.data;
});

export const getHomeGoldList = createAsyncThunk("Home/getHomeGoldList", async (currentGoldSelling) => {
    const response = await axios.get(`${api_url}/HomeApi/getHomeGoldList?currentGoldSelling=${currentGoldSelling}`, {
        headers: {
            Authorization: `Bearer ${data.jwtToken}`
        }
    });
    return response.data;
});

export const HomeSlice = createSlice({
    name: "Home",
    initialState: {
        currencyData: {},
        goldData: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getCurrencyData.fulfilled, (state, action) => {
            state.currencyData = action.payload;
        });
        builder.addCase(getHomeGoldList.fulfilled, (state, action) => {
            state.goldData = action.payload;
        });
    }
})

export default HomeSlice.reducer