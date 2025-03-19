import axios from "axios";
import { fetchGoldData } from "../redux/slices/GoldSlice";
import { openModal, closeModal, openDeleteModal, closeDeleteModal } from "../redux/slices/ModalSlice";

// Altın id bilgisi almak için fonksiyon
export const getGoldId = async (goldApiUrl, selectedId, setGoldIdData, setValue, data) => {
    const response = await axios.get(`${goldApiUrl}GetGold?pId=${selectedId}`, {
        headers: {
            Authorization: `Bearer ${data.jwtToken}`
        }
    });
    setGoldIdData(response.data);
    setValue("goldAmount", response.data.goldAmount);
    setValue("price", response.data.price);
};

// Ekleme ve güncelleme işlemi
export const AddUpdate = async (model, goldApiUrl, goldIdData, dispatch, data) => {
    model.oneGrGoldPrice = model.price / model.goldAmount;
    if (goldIdData) {
        model.id = goldIdData.id;
        model.createdAt = goldIdData.createdAt;
        model.createdBy = goldIdData.createdBy;
        await axios.put(`${goldApiUrl}Update`, model, {
            headers: {
                Authorization: `Bearer ${data.jwtToken}`
            }
        });
    } else {
        await axios.post(`${goldApiUrl}Add`, model, {
            headers: {
                Authorization: `Bearer ${data.jwtToken}`
            }
        });
    }
    dispatch(fetchGoldData());
    dispatch(closeModal());
};

// Silme işlemi
export const Delete = async (goldApiUrl, deleteId, dispatch, data) => {
    await axios.delete(`${goldApiUrl}Delete?pId=${deleteId}`, {
        headers: {
            Authorization: `Bearer ${data.jwtToken}`
        }
    });

    dispatch(fetchGoldData());
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