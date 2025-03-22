import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api_url = "https://localhost:7087/api";
const data = JSON.parse(localStorage.getItem('userData'));

export const fetchGoldData = createAsyncThunk("gold/fetchGoldData", async () => {
    const response = await axios.get(`${api_url}/GoldApi/GetUserGoldList`, {
        headers: {
            Authorization: `Bearer ${data.jwtToken}`
        }
    });
    return response.data;
});

export const GoldSlice = createSlice({
    name: "Gold",
    initialState: {
        goldData: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGoldData.fulfilled, (state, action) => {
            state.goldData = action.payload;
        });
    }
});

export default GoldSlice.reducer;