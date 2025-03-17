import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Gold.css'
import { TiPlus } from "react-icons/ti";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function Gold() {
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
                                <thead>
                                    <tr>
                                        <th scope="col" className='gold-thead-th1'></th>
                                        <th scope="col" className='gold-thead-th2'>Altın/gr</th>
                                        <th scope="col" className='gold-thead-th3'>Toplam Fiyat</th>
                                        <th scope="col" className='gold-thead-th4'>1 Gram Fiyat</th>
                                        <th scope="col" className='gold-thead-th5'>
                                            <a href="#" className="btn-get-started table-button">
                                                <TiPlus className='table-icons1' /> EKLE
                                            </a>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.from({ length: 50 }, (_, index) => (
                                        <tr key={index}>
                                            <td scope="row" className='gold-tbody-td1'>{index + 1}</td>
                                            <td className='gold-tbody-td2'>Jacob</td>
                                            <td className='gold-tbody-td3'>Thornton</td>
                                            <td className='gold-tbody-td4'>@fat</td>
                                            <td className='gold-tbody-td5'>
                                                <a href='#' className='table-icons2' ><MdModeEdit /></a>
                                                <a href='#' className='table-icons3'><MdDelete /></a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Footer />
                </section>{/* /Hero Section */}
            </main>
        </>
    )
}

export default Gold