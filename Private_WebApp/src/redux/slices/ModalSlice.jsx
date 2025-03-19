import { createSlice } from '@reduxjs/toolkit';

const ModalSlice = createSlice({
    name: 'Modal',
    initialState: {
        isOpen: false,
        selectedId: null,
        isDeleteModalOpen: false,
        deleteId: null
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
        openDeleteModal: (state, action) => {
            state.isDeleteModalOpen = true;
            state.deleteId = action.payload;
        },
        closeDeleteModal: (state) => {
            state.isDeleteModalOpen = false;
            state.deleteId = null;
        }
    },
});

export const { openModal, closeModal, openDeleteModal, closeDeleteModal } = ModalSlice.actions;

export default ModalSlice.reducer;