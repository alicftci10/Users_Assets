import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api_url = "https://localhost:7087/api";

export const LoginUser = createAsyncThunk("Login/LoginUser", async (userData) => {
    const response = await axios.post(`${api_url}/LoginApi/LoginUser`, userData);
    const data = response.data;

    if (data && data.jwtToken) {
        localStorage.setItem("userData", JSON.stringify(data));
    }
    return data;
});

export const LogoutUser = createAsyncThunk("Login/LogoutUser", async () => {
    return localStorage.removeItem("userData");
});

export const LoginSlice = createSlice({
    name: "Login",
    initialState: {
        user: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(LoginUser.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(LogoutUser.fulfilled, (state) => {
                state.user = null;
            });
    }
});

export default LoginSlice.reducer;