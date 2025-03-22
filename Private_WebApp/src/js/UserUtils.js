import axios from "axios";
import { fetchUserData } from "../redux/slices/UserSlice";
import { openModal, closeModal, openDeleteModal, closeDeleteModal } from "../redux/slices/ModalSlice";

// User id bilgisi almak için fonksiyon
export const getUserId = async (userApiUrl, selectedId, setUserIdData, setValue, data) => {
    const response = await axios.get(`${userApiUrl}GetUser?pId=${selectedId}`, {
        headers: {
            Authorization: `Bearer ${data.jwtToken}`
        }
    });
    setUserIdData(response.data);
    setValue("name", response.data.name);
    setValue("surname", response.data.surname);
    setValue("userName", response.data.userName);
    setValue("password", response.data.password);
    setValue("userTypeId", response.data.userTypeId);
    setValue("createdAt", response.data.createdAt);
    setValue("createdBy", response.data.createdBy);
};

// Ekleme ve güncelleme işlemi
export const AddUpdate = async (model, userApiUrl, userIdData, dispatch, data) => {
    if (userIdData) {
        model.id = userIdData.id;
        await axios.put(`${userApiUrl}Update`, model, {
            headers: {
                Authorization: `Bearer ${data.jwtToken}`
            }
        });
    } else {
        await axios.post(`${userApiUrl}Add`, model, {
            headers: {
                Authorization: `Bearer ${data.jwtToken}`
            }
        });
    }
    dispatch(fetchUserData());
    dispatch(closeModal());
};

// Silme işlemi
export const Delete = async (userApiUrl, deleteId, dispatch, data) => {
    await axios.delete(`${userApiUrl}Delete?pId=${deleteId}`, {
        headers: {
            Authorization: `Bearer ${data.jwtToken}`
        }
    });

    dispatch(fetchUserData());
    dispatch(closeDeleteModal());
};

// Modal açma ve kapama işlemleri
export const openAddModal = (dispatch) => {
    dispatch(openModal());
};

export const openUpdateModal = (dispatch, id) => {
    dispatch(openModal(id));
};

export const closeAddModal = (dispatch) => {
    dispatch(closeModal());
};

export const openDeleteConfirmation = (dispatch, id) => {
    dispatch(openDeleteModal(id));
};

export const closeDeleteConfirmation = (dispatch) => {
    dispatch(closeDeleteModal());
};