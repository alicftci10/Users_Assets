import { useEffect } from 'react'
import '../css/Home.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencyData } from '../redux/slices/HomeSlice';
import { formatCurrency } from '../utilities/Format';

function Home() {

    const dispatch = useDispatch();
    const currencyData = useSelector((state) => state.Home.currencyData);

    useEffect(() => {
        dispatch(getCurrencyData());
    }, [dispatch]);

    return (
        <>
            <Header />
            <main className="main">
                {/* Hero Section */}
                <section id="hero" className="hero section dark-background mainsection row">
                    <img src="/src/images/clouds.jpg" alt="" data-aos="fade-in" />
                    <div className="container alert-container">
                        <div className='container'>
                            <div className='row justify-content-center' >
                                <div className="alert alert-success col-md-3 text-center" role="alert">
                                    <span className='fw-bold'>USD</span><br />
                                    {currencyData?.USD &&
                                        <>
                                            <span style={{ marginRight: '50px' }}>ALIŞ: {formatCurrency(currencyData.USD.Buying)} ₺</span>
                                            <span>SATIŞ: {formatCurrency(currencyData.USD.Selling)} ₺</span>
                                        </>
                                    }
                                </div>
                                <div className="alert alert-success col-md-3 text-center" style={{ marginLeft: '5px' }} role="alert">
                                    <span className='fw-bold'>EURO</span><br />
                                    {currencyData?.EUR &&
                                        <>
                                            <span style={{ marginRight: '50px' }}>ALIŞ: {formatCurrency(currencyData.EUR.Buying)} ₺</span>
                                            <span>SATIŞ: {formatCurrency(currencyData.EUR.Selling)} ₺</span>
                                        </>
                                    }
                                </div>
                                <div className="alert alert-success col-md-3 text-center" style={{ marginLeft: '5px' }} role="alert">
                                    <span className='fw-bold'>ALTIN</span><br />
                                    {currencyData?.GRA &&
                                        <>
                                            <span style={{ marginRight: '50px' }}>ALIŞ: {formatCurrency(currencyData.GRA.Buying)} ₺</span>
                                            <span>SATIŞ: {formatCurrency(currencyData.GRA.Selling)} ₺</span>
                                        </>
                                    }
                                </div>
                            </div>
                            <div className='row justify-content-center'>
                                <div className="alert alert-primary text-center" role="alert">
                                    <div className='col-md-12'>
                                        <span className='fw-bold'>USD</span>
                                    </div>
                                    <br />
                                    <div className='col-md-3'>
                                        sa
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </section>{/* /Hero Section */}
            </main>
        </>
    )
}

export default Home;