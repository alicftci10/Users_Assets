import { createSlice } from '@reduxjs/toolkit';

const LoadingSlice = createSlice({
    name: 'Loading',
    initialState: {
        loading: false,
        activeRequests: 0
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(
                (action) => action.type.endsWith('/pending'),
                (state) => {
                    state.activeRequests += 1;
                    state.loading = true;
                }
            )
            .addMatcher(
                (action) => action.type.endsWith('/fulfilled') || action.type.endsWith('/rejected'),
                (state) => {
                    state.activeRequests -= 1;
                    if (state.activeRequests === 0) {
                        state.loading = false;
                    }
                }
            );
    }
});

export default LoadingSlice.reducer;