import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false
}

export const HomeSlice = createSlice({
    name: "Home",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

    }
})

export const { } = HomeSlice.actions

export default HomeSlice.reducer