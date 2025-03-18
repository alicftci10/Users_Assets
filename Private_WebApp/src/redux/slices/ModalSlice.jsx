import { createSlice } from '@reduxjs/toolkit';

const ModalSlice = createSlice({
    name: 'Modal',
    initialState: {
        isOpen: false,
        selectedId: null
    },
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
            state.selectedId = action.payload;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.selectedId = null;
        },
    },
});

export const { openModal, closeModal } = ModalSlice.actions;

export default ModalSlice.reducer;