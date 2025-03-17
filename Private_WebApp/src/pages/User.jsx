import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

function User() {
    return (
        <>
            <Header />
            <main className="main">
                {/* Hero Section */}
                <section id="hero" className="hero section dark-background mainsection row">
                    <img src="/src/images/clouds.jpg" alt="" data-aos="fade-in" />
                    <div className="container d-flex flex-column align-items-center">
                        <h2 data-aos="fade-up" data-aos-delay="100">PLAN. LAUNCH. GROW.</h2>
                        <p data-aos="fade-up" data-aos-delay="200">We are team of talented designers making websites with Bootstrap
                        </p>
                        <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
                            <a href="#about" className="btn-get-started">Get Started</a>
                            <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                                className="glightbox btn-watch-video d-flex align-items-center"><i
                                    className="bi bi-play-circle"></i><span>Watch Video</span></a>
                        </div>
                    </div>
                    <Footer />
                </section>{/* /Hero Section */}
            </main>

            {/* Scroll Top */}
            <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i
                className="bi bi-arrow-up-short"></i></a>
        </>
    )
}

export default User