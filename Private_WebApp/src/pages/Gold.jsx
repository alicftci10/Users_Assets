import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Gold.css'
import { TiPlus } from "react-icons/ti";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { fetchGoldData } from '../redux/slices/GoldSlice';
import { formatDate } from '../utilities/Format';
import Modal from 'react-modal';
import { openModal, closeModal } from '../redux/slices/ModalSlice';
import axios from "axios";

function Gold() {
    const dispatch = useDispatch();
    const goldList = useSelector((state) => state.Gold.goldData);
    const isModalOpen = useSelector((state) => state.Modal.isOpen);
    const selectedId = useSelector((state) => state.Modal.selectedId);
    const [goldIdData, setGoldIdData] = useState(null);
    const data = JSON.parse(localStorage.getItem('userData'))

    useEffect(() => {
        dispatch(fetchGoldData());
    }, [dispatch])

    useEffect(() => {
        if (selectedId) {
            getGoldId();
        }
    }, [selectedId]);

    const getGoldId = async () => {
        const response = await axios.get(`https://localhost:7087/api/GoldApi/GetGold?pId=${selectedId}`, {
            headers: {
                Authorization: `Bearer ${data.jwtToken}`
            }
        })
        setGoldIdData(response.data);
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
                                            <a href="#" className="btn-get-started table-button fw-bold" onClick={() => dispatch(openModal())}>
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
                                                <td><span>{item.goldAmount}</span></td>
                                                <td><span>{item.price}</span></td>
                                                <td><span>{item.oneGrGoldPrice}</span></td>
                                                <td><span>{formatDate(item.createdAt)}</span></td>
                                                <td>
                                                    <a href='#' className='table-icons2' onClick={() => dispatch(openModal(item.id))}><MdModeEdit /></a>
                                                    <a href='#' className='table-icons3'><MdDelete /></a>
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
                        onRequestClose={() => dispatch(closeModal())}
                        contentLabel="Yeni Altın Ekle"
                        className="modal-content"
                        overlayClassName="modal-overlay"
                        ariaHideApp={false}
                    >
                        <div className="modal-header">
                            <h5 className="modal-title">Altın Ekle</h5>
                            <MdClose className='btn-close' onClick={() => dispatch(closeModal())} />
                        </div>
                        <div className="modal-body">
                            {/* Modal İçeriği */}
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Altın Miktarı (Gr)</label>
                                    <input type="number" value={goldIdData?.goldAmount || ""} className="form-control bg-dark text-white" id="goldAmount" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Toplam Fiyat (TL)</label>
                                    <input type="number" value={goldIdData?.price || ""} className="form-control bg-dark text-white" id="price" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger buton-modal" style={{ backgroundColor: '#dc3545' }} onClick={() => dispatch(closeModal())}>Kapat</button>
                            <button type="button" className="btn btn-secondary buton-modal" style={{ backgroundColor: '#6c757d' }}>Kaydet</button>
                        </div>
                    </Modal>

                    <Footer />
                </section>{/* /Hero Section */}
            </main>
        </>
    )
}

export default Gold