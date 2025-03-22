import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/User.css'
import { TiPlus } from "react-icons/ti";
import { MdModeEdit, MdDelete, MdClose } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../redux/slices/UserSlice.jsx';
import { formatDateTime } from '../utilities/Format.js';
import Modal from 'react-modal';
import { getUserId, AddUpdate, Delete, openAddModal, openUpdateModal, closeAddModal, openDeleteConfirmation, closeDeleteConfirmation } from '../js/UserUtils.js';

function User() {
    const userApiUrl = "https://localhost:7087/api/UserApi/";
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.User.userData);
    const isModalOpen = useSelector((state) => state.Modal.isOpen);
    const selectedId = useSelector((state) => state.Modal.selectedId);
    const isDeleteModalOpen = useSelector((state) => state.Modal.isDeleteModalOpen);
    const deleteId = useSelector((state) => state.Modal.deleteId);
    const [userIdData, setUserIdData] = useState(null);
    const data = JSON.parse(localStorage.getItem('userData'))

    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);

    useEffect(() => {
        if (selectedId) {
            getUserId(userApiUrl, selectedId, setUserIdData, setValue, data);
        } else {
            setUserIdData(null);
            setValue("name", null);
            setValue("surname", null);
            setValue("userName", null);
            setValue("password", null);
            setValue("userTypeId", null);
            setValue("createdAt", null);
            setValue("createdBy", null);
        }
    }, [selectedId]);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        mode: "onChange"
    });

    const handleAddUpdate = async (model) => {
        AddUpdate(model, userApiUrl, userIdData, dispatch, data);
    };

    const handleDelete = async () => {
        Delete(userApiUrl, deleteId, dispatch, data);
    };

    return (
        <>
            <Header />
            <main className="main">
                {/* Hero Section */}
                <section id="hero" className="hero section dark-background mainsection row">
                    <img src="/src/images/clouds.jpg" alt="" data-aos="fade-in" />
                    <div className="container d-flex flex-column align-items-center">
                        <div className='container table-container'>
                            <table className="table table-dark table-striped">
                                <thead style={{ textAlign: 'center' }}>
                                    <tr>
                                        <th scope="col" className='user-thead-th1'></th>
                                        <th scope="col" className='user-thead-th2'>AD</th>
                                        <th scope="col" className='user-thead-th3'>SOYAD</th>
                                        <th scope="col" className='user-thead-th4'>KULLANICI ADI</th>
                                        <th scope="col" className='user-thead-th5'>ŞİFRE</th>
                                        <th scope="col" className='user-thead-th6'>YETKİ</th>
                                        <th scope="col" className='user-thead-th7'>TARİH</th>
                                        <th scope="col" className='user-thead-th8'>
                                            <a href="#" className="btn-get-started table-button fw-bold" onClick={() => openAddModal(dispatch)}>
                                                <TiPlus className='table-icons1' /> EKLE
                                            </a>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody style={{ textAlign: 'center' }}>
                                    {
                                        userList.length > 0 ? userList.map((item, index) => (
                                            <tr key={item.id}>
                                                <td scope="row" className='user-tbody-td1'><span>{index + 1}</span></td>
                                                <td><span>{item.name}</span></td>
                                                <td><span>{item.surname}</span></td>
                                                <td><span>{item.userName}</span></td>
                                                <td><span>{item.password}</span></td>
                                                <td>
                                                    {
                                                        item.userTypeId == 1 ?
                                                            <span className="fw-bold" style={{ color: 'green' }}>Admin</span>
                                                            :
                                                            <span className="fw-bold" style={{ color: 'red' }}>Müşteri</span>
                                                    }
                                                </td>
                                                <td><span>{formatDateTime(item.createdAt)}</span></td>
                                                <td>
                                                    <a href='#' className='table-icons2' onClick={() => openUpdateModal(dispatch, item.id)}><MdModeEdit /></a>
                                                    <a href='#' className='table-icons3' onClick={() => openDeleteConfirmation(dispatch, item.id)}><MdDelete /></a>
                                                </td>
                                            </tr>
                                        ))
                                            :
                                            <tr scope="row" style={{ textAlign: 'center' }}>
                                                <td colSpan={6}>Gösterilecek veri bulunamadı!!</td>
                                            </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Modal */}
                    <Modal
                        isOpen={isModalOpen}
                        onRequestClose={() => closeAddModal(dispatch)}
                        contentLabel="Yeni Kullanıcı Ekle"
                        className="modal-content-user"
                        overlayClassName="modal-overlay"
                        ariaHideApp={false}
                    >
                        <div className="modal-header">
                            <h5 className="modal-title">Kullanıcı Ekle</h5>
                            <MdClose className='btn-close' onClick={() => closeAddModal(dispatch)} />
                        </div>
                        <div className="modal-body">
                            {/* Modal İçeriği */}
                            <form onSubmit={handleSubmit(handleAddUpdate)}>
                                <div className="row">
                                    {/* Ad */}
                                    <div className="form-group col-md-6">
                                        <label className="form-label">Ad</label>
                                        <input
                                            type="text"
                                            {...register("name", {
                                                required: "Ad boş bırakılamaz."
                                            })}
                                            className={`form-control bg-dark text-white ${errors.name ? "is-invalid" : ""}`}
                                            id="name"
                                        />
                                        {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                                    </div>

                                    {/* Soyad */}
                                    <div className="form-group col-md-6">
                                        <label className="form-label">Soyad</label>
                                        <input
                                            type="text"
                                            {...register("surname", {
                                                required: "Soyad boş bırakılamaz."
                                            })}
                                            className={`form-control bg-dark text-white ${errors.surname ? "is-invalid" : ""}`}
                                            id="surname"
                                        />
                                        {errors.surname && <div className="invalid-feedback">{errors.surname.message}</div>}
                                    </div>
                                </div>

                                <div className="row">
                                    {/* Kullanıcı Adı */}
                                    <div className="form-group col-md-6">
                                        <label className="form-label">Kullanıcı Adı</label>
                                        <input
                                            type="text"
                                            {...register("userName", {
                                                required: "Kullanıcı Adı boş bırakılamaz."
                                            })}
                                            className={`form-control bg-dark text-white ${errors.userName ? "is-invalid" : ""}`}
                                            id="userName"
                                        />
                                        {errors.userName && <div className="invalid-feedback">{errors.userName.message}</div>}
                                    </div>

                                    {/* Şifre */}
                                    <div className="form-group col-md-6">
                                        <label className="form-label">Şifre</label>
                                        <input
                                            type="text"
                                            {...register("password", {
                                                required: "Şifre boş bırakılamaz.",
                                                minLength: { value: 5, message: "Minimum 5 karakter giriniz." }
                                            })}
                                            className={`form-control bg-dark text-white ${errors.password ? "is-invalid" : ""}`}
                                            id="password"
                                        />
                                        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                                    </div>
                                </div>

                                <div className="row">
                                    {/* Yetki */}
                                    <div className="form-group col-md-6">
                                        <label className="form-label">Yetki</label>
                                        <select
                                            {...register("userTypeId", {
                                                required: "Yetki boş bırakılamaz."
                                            })}
                                            className={`form-select bg-dark text-white ${errors.userTypeId ? "is-invalid" : ""}`}
                                            id="userTypeId"
                                        >
                                            <option value="">Seçiniz</option>
                                            <option value="1">Admin</option>
                                            <option value="2">Müşteri</option>
                                        </select>
                                        {errors.userTypeId && <div className="invalid-feedback">{errors.userTypeId.message}</div>}
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger buton-modal" style={{ backgroundColor: '#dc3545' }} onClick={() => closeAddModal(dispatch)}>
                                        Kapat
                                    </button>
                                    <button type="submit" className="btn btn-secondary buton-modal" style={{ backgroundColor: '#6c757d' }}>
                                        Kaydet
                                    </button>
                                </div>
                            </form>

                        </div>
                    </Modal>

                    {/* Delete Modal */}
                    <Modal
                        isOpen={isDeleteModalOpen}
                        onRequestClose={() => closeDeleteConfirmation(dispatch)}
                        contentLabel="Delete İşlemi"
                        className="modal-content-delete"
                        overlayClassName="modal-overlay"
                        ariaHideApp={false}
                    >
                        <div className="modal-header">
                            <h5 className="modal-title">UYARI!!</h5>
                            <MdClose className="btn-close" onClick={() => closeDeleteConfirmation(dispatch)} />
                        </div>
                        <div className="modal-body">
                            <p>Silmek İstediğinize Emin Misiniz?</p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger buton-modal"
                                onClick={() => closeDeleteConfirmation(dispatch)}
                                style={{ backgroundColor: '#dc3545' }}
                            >
                                Hayır
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary buton-modal"
                                onClick={handleDelete}
                                style={{ backgroundColor: '#6c757d' }}
                            >
                                Evet
                            </button>
                        </div>
                    </Modal>

                    <Footer />
                </section>{/* /Hero Section */}
            </main>
        </>
    );
}

export default User;