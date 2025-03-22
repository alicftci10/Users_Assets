import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api_url = "https://localhost:7087/api";
const data = JSON.parse(localStorage.getItem('userData'));

export const fetchUserData = createAsyncThunk("user/fetchUserData", async () => {
    const response = await axios.get(`${api_url}/UserApi/GetUserList`, {
        headers: {
            Authorization: `Bearer ${data.jwtToken}`
        }
    });
    return response.data;
});

export const UserSlice = createSlice({
    name: "User",
    initialState: {
        userData: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserData.fulfilled, (state, action) => {
            state.userData = action.payload;
        });
    }
});

export default UserSlice.reducer;