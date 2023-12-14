import React from "react";



function Footer() {
    return (
        <footer className="footer">
            <div className="footer-address">
                <h4>MK Store</h4>
                
                <p>PHONE: +216 70 111 222</p>
                <p>Email: Mkstore@gmail.com.tn</p>
            </div>
            
            <div className="footer-connect">
                <h4>CONNECT WITH MK Store</h4>
                
            </div>
            <div className="footer-social">
                <h4>FOLLOW US</h4>
                <div className="social-media-links">
                        <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i> Facebook
                        </a>
                        <br /> 
                        <a href="https://www.instagram.com/your-instagram-page" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                        <br /> 
                        <a href="https://www.snapchat.com/your-snapchat-page" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-snapchat"></i> Snapchat
                        </a>
                    </div>
                
            </div>
            
        </footer>
    );
}

export default Footer;
