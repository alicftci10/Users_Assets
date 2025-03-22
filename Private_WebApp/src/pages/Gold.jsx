import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Gold.css'
import { TiPlus } from "react-icons/ti";
import { MdModeEdit, MdDelete, MdClose } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { fetchGoldData } from '../redux/slices/GoldSlice';
import { formatDate, formatCurrency } from '../utilities/Format.js';
import Modal from 'react-modal';
import { getGoldId, AddUpdate, Delete, openAddModal, openUpdateModal, closeAddModal, openDeleteConfirmation, closeDeleteConfirmation } from '../js/GoldUtils';

function Gold() {
    const goldApiUrl = "https://localhost:7087/api/GoldApi/";
    const dispatch = useDispatch();
    const goldList = useSelector((state) => state.Gold.goldData);
    const isModalOpen = useSelector((state) => state.Modal.isOpen);
    const selectedId = useSelector((state) => state.Modal.selectedId);
    const isDeleteModalOpen = useSelector((state) => state.Modal.isDeleteModalOpen);
    const deleteId = useSelector((state) => state.Modal.deleteId);
    const [goldIdData, setGoldIdData] = useState(null);
    const data = JSON.parse(localStorage.getItem('userData'))

    useEffect(() => {
        dispatch(fetchGoldData());
    }, [dispatch]);

    useEffect(() => {
        if (selectedId) {
            getGoldId(goldApiUrl, selectedId, setGoldIdData, setValue, data);
        } else {
            setGoldIdData(null);
            setValue("goldAmount", null);
            setValue("price", null);
            setValue("createdAt", null);
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
        AddUpdate(model, goldApiUrl, goldIdData, dispatch, data);
    };

    const handleDelete = async () => {
        Delete(goldApiUrl, deleteId, dispatch, data);
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
                                        <th scope="col" className='gold-thead-th1'></th>
                                        <th scope="col" className='gold-thead-th2'>ALTIN/GR</th>
                                        <th scope="col" className='gold-thead-th3'>TOPLAM FİYAT</th>
                                        <th scope="col" className='gold-thead-th4'>1 GRAM FİYAT</th>
                                        <th scope="col" className='gold-thead-th5'>TARİH</th>
                                        <th scope="col" className='gold-thead-th6'>
                                            <a href="#" className="btn-get-started table-button fw-bold" onClick={() => openAddModal(dispatch)}>
                                                <TiPlus className='table-icons1' /> EKLE
                                            </a>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody style={{ textAlign: 'center' }}>
                                    {
                                        goldList.length > 0 ? goldList.map((item, index) => (
                                            <tr key={item.id}>
                                                <td scope="row" className='gold-tbody-td1'><span>{index + 1}</span></td>
                                                <td><span>{formatCurrency(item.goldAmount)}</span></td>
                                                <td><span>{formatCurrency(item.price)}</span></td>
                                                <td><span>{formatCurrency(item.oneGrGoldPrice)}</span></td>
                                                <td><span>{formatDate(item.createdAt)}</span></td>
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
                        contentLabel="Yeni Altın Ekle"
                        className="modal-content-gold"
                        overlayClassName="modal-overlay"
                        ariaHideApp={false}
                    >
                        <div className="modal-header">
                            <h5 className="modal-title">Altın Ekle</h5>
                            <MdClose className='btn-close' onClick={() => closeAddModal(dispatch)} />
                        </div>
                        <div className="modal-body">
                            {/* Modal İçeriği */}
                            <form onSubmit={handleSubmit(handleAddUpdate)}>
                                {/* Altın Miktarı */}
                                <div className="form-group">
                                    <label className="form-label">Altın Miktarı (Gr)</label>
                                    <input
                                        type="number"
                                        step="any"
                                        {...register("goldAmount", {
                                            required: "Altın Miktarı boş bırakılamaz."
                                        })}
                                        className={`form-control bg-dark text-white ${errors.goldAmount ? "is-invalid" : ""}`}
                                        id="goldAmount"
                                    />
                                    {errors.goldAmount && <div className="invalid-feedback">{errors.goldAmount.message}</div>}
                                </div>

                                {/* Toplam Fiyat */}
                                <div className="form-group">
                                    <label className="form-label">Toplam Fiyat (TL)</label>
                                    <input
                                        type="number"
                                        step="any"
                                        {...register("price", {
                                            required: "Toplam Fiyat boş bırakılamaz."
                                        })}
                                        className={`form-control bg-dark text-white ${errors.price ? "is-invalid" : ""}`}
                                        id="price"
                                    />
                                    {errors.price && <div className="invalid-feedback">{errors.price.message}</div>}
                                </div>

                                {/* Tarih */}
                                <div className="form-group">
                                    <label className="form-label">Tarih</label>
                                    <input
                                        type="date"
                                        {...register("createdAt", {
                                            required: "Tarih boş bırakılamaz."
                                        })}
                                        className={`form-control bg-dark text-white ${errors.createdAt ? "is-invalid" : ""}`}
                                        id="createdAt"
                                    />
                                    {errors.createdAt && <div className="invalid-feedback">{errors.createdAt.message}</div>}
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

export default Gold;