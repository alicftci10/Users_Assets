import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Gold.css'

function Gold() {
    return (
        <>
            <Header />
            <main className="main">
                {/* Hero Section */}
                <section id="hero" className="hero section dark-background mainsection row">
                    <img src="/src/images/clouds.jpg" alt="" data-aos="fade-in" />
                    <div className="container d-flex flex-column align-items-center">
                        <div className='table-responsive text-nowrap container' style={{ height: '67vh', top: '20px' }}>
                            <table className="table table-dark table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col" style={{ borderRadius: '20px 0 0 0' }}>#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col" style={{ borderRadius: '0 20px 0 0' }}>Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr  >
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    {Array.from({ length: 50 }, (_, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Footer />
                </section>{/* /Hero Section */}
            </main>

            {/* Scroll Top */}
            {/* <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i
                className="bi bi-arrow-up-short"></i></a> */}
        </>
    )
}

export default Gold