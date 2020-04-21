import React from 'react';

function Footer() {
    return(
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center font-ridi">Copyright © {(new Date().getFullYear())} BaeJino. </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;