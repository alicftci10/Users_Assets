import React from 'react'

function Footer() {
    return (
        <>
            <footer id="footer" className="footer dark-background">
                <div className="container copyright text-center" >
                    <p>© <span>Copyright</span> <strong className="px-1 sitename">ALi</strong> {new Date().getFullYear()} <span>All Rights Reserved</span>
                    </p>
                    <div className="credits">
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by <a
                            href="https://themewagon.com">ThemeWagon</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer