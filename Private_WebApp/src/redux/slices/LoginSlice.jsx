import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const api_url = "https://localhost:7087/api"

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
        loading: false,
        user: null
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(LoginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(LoginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(LogoutUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(LogoutUser.fulfilled, (state) => {
                state.loading = false;
                state.user = null;
            })
    }
})

export const { } = LoginSlice.actions

export default LoginSlice.reducer