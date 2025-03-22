import { useEffect } from 'react'
import '../css/Home.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencyData } from '../redux/slices/HomeSlice';
import { formatCurrency } from '../utilities/Format.js';

function Home() {

    const dispatch = useDispatch();
    const currencyData = useSelector((state) => state.Home.currencyData);
    const goldData = useSelector((state) => state.Home.goldData);

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
                                    <h3>USD</h3>
                                    {currencyData?.USD &&
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                <span className='span-weight-currency'>Alış</span>
                                                <br />
                                                {
                                                    currencyData.USD.Change >= 0 ?
                                                        <span style={{ color: 'green' }}>{formatCurrency(currencyData.USD.Buying)} ₺</span>
                                                        :
                                                        <span style={{ color: 'red' }}>{formatCurrency(currencyData.USD.Buying)} ₺</span>
                                                }
                                            </div>
                                            <div className='col-md-4'>
                                                <br />
                                                {
                                                    currencyData.USD.Change >= 0 ?
                                                        <span style={{ color: 'green' }}>%{formatCurrency(currencyData.USD.Change)}</span>
                                                        :
                                                        <span style={{ color: 'red' }}>%{formatCurrency(currencyData.USD.Change)}</span>
                                                }
                                            </div>
                                            <div className='col-md-4'>
                                                <span className='span-weight-currency'>Satış</span>
                                                <br />
                                                {
                                                    currencyData.USD.Change >= 0 ?
                                                        <span style={{ color: 'green' }}>{formatCurrency(currencyData.USD.Selling)} ₺</span>
                                                        :
                                                        <span style={{ color: 'red' }}>{formatCurrency(currencyData.USD.Selling)} ₺</span>
                                                }
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className="alert alert-success col-md-3 text-center" style={{ marginLeft: '5px' }} role="alert">
                                    <h3>EURO</h3>
                                    {currencyData?.EUR &&
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                <span className='span-weight-currency'>Alış</span>
                                                <br />
                                                {
                                                    currencyData.EUR.Change >= 0 ?
                                                        <span style={{ color: 'green' }}>{formatCurrency(currencyData.EUR.Buying)} ₺</span>
                                                        :
                                                        <span style={{ color: 'red' }}>{formatCurrency(currencyData.EUR.Buying)} ₺</span>
                                                }
                                            </div>
                                            <div className='col-md-4'>
                                                <br />
                                                {
                                                    currencyData.EUR.Change >= 0 ?
                                                        <span style={{ color: 'green' }}>%{formatCurrency(currencyData.EUR.Change)}</span>
                                                        :
                                                        <span style={{ color: 'red' }}>%{formatCurrency(currencyData.EUR.Change)}</span>
                                                }
                                            </div>
                                            <div className='col-md-4'>
                                                <span className='span-weight-currency'>Satış</span>
                                                <br />
                                                {
                                                    currencyData.EUR.Change >= 0 ?
                                                        <span style={{ color: 'green' }}>{formatCurrency(currencyData.EUR.Selling)} ₺</span>
                                                        :
                                                        <span style={{ color: 'red' }}>{formatCurrency(currencyData.EUR.Selling)} ₺</span>
                                                }
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className="alert alert-success col-md-3 text-center" style={{ marginLeft: '5px' }} role="alert">
                                    <h3>ALTIN</h3>
                                    {currencyData?.GRA &&
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                <span className='span-weight-currency'>Alış</span>
                                                <br />
                                                {
                                                    currencyData.GRA.Change >= 0 ?
                                                        <span style={{ color: 'green' }}>{formatCurrency(currencyData.GRA.Buying)} ₺</span>
                                                        :
                                                        <span style={{ color: 'red' }}>{formatCurrency(currencyData.GRA.Buying)} ₺</span>
                                                }
                                            </div>
                                            <div className='col-md-4'>
                                                <br />
                                                {
                                                    currencyData.GRA.Change >= 0 ?
                                                        <span style={{ color: 'green' }}>%{formatCurrency(currencyData.GRA.Change)}</span>
                                                        :
                                                        <span style={{ color: 'red' }}>%{formatCurrency(currencyData.GRA.Change)}</span>
                                                }
                                            </div>
                                            <div className='col-md-4'>
                                                <span className='span-weight-currency'>Satış</span>
                                                <br />
                                                {
                                                    currencyData.GRA.Change >= 0 ?
                                                        <span style={{ color: 'green' }}>{formatCurrency(currencyData.GRA.Selling)} ₺</span>
                                                        :
                                                        <span style={{ color: 'red' }}>{formatCurrency(currencyData.GRA.Selling)} ₺</span>
                                                }
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className='row justify-content-center'>
                                <div className="alert alert-primary text-center" role="alert">
                                    <h3>ALTIN HESABI</h3>
                                    <div className='row'>
                                        <div className='col-md-2'>
                                            <span className='span-weight-gold'>Toplam Altın/Gr</span>
                                            <br />
                                            {goldData?.currentGoldValue &&
                                                <span>{formatCurrency(goldData.currentGoldValue)}</span>
                                            }
                                        </div>
                                        <div className='col-md-2'>
                                            <span className='span-weight-gold'>Toplam Altın Miktarı</span>
                                            <br />
                                            {goldData?.currentGoldPrice &&
                                                <span>{formatCurrency(goldData.currentGoldPrice)} ₺</span>
                                            }
                                        </div>
                                        <div className='col-md-2'>
                                            <span className='span-weight-gold'>Toplam Alınan Altın</span>
                                            <br />
                                            {goldData?.totalGoldBuyingPrice &&
                                                <span>{formatCurrency(goldData.totalGoldBuyingPrice)} ₺</span>
                                            }
                                        </div>
                                        <div className='col-md-2'>
                                            <span className='span-weight-gold'>Toplam Satılan Altın</span>
                                            <br />
                                            {goldData?.totalGoldSellingPrice &&
                                                <span>{formatCurrency(-goldData.totalGoldSellingPrice)} ₺</span>
                                            }
                                        </div>
                                        <div className='col-md-2'>
                                            <span className='span-weight-gold'>Toplam Maliyet</span>
                                            <br />
                                            {goldData?.totalCost &&
                                                <>
                                                    {
                                                        goldData.totalCost <= 0 ?
                                                            <span style={{ color: 'green' }}>{formatCurrency(-goldData.totalCost)} ₺</span>
                                                            :
                                                            <span style={{ color: 'red' }}>{formatCurrency(goldData.totalCost)} ₺</span>
                                                    }
                                                </>
                                            }
                                        </div>
                                        <div className='col-md-2'>
                                            <span className='span-weight-gold'>Toplam Kar/Zarar</span>
                                            <br />
                                            {goldData?.currentProfitorLoss &&
                                                <>
                                                    {
                                                        goldData.currentProfitorLoss >= 0 ?
                                                            <span style={{ color: 'green' }}>{formatCurrency(goldData.currentProfitorLoss)} ₺</span>
                                                            :
                                                            <span style={{ color: 'red' }}>{formatCurrency(-goldData.currentProfitorLoss)} ₺</span>
                                                    }
                                                </>
                                            }
                                        </div>
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