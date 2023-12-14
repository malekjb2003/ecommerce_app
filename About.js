import React from "react";
import './App.css';

function About() {
    return (
        <div className="about-container">
            <div className="image">
                <img
                    src="https://guardian.ng/wp-content/uploads/2022/06/Makeup.jpg"
                    alt="image"
                    className="about-image"
                />
            </div>
            <div className="card2">
                <div className="card-body">
                    <h5 className="card-title2">About MK Store</h5>
                    <p className="card-text2">Welcome to MK Store, your one-stop online makeup shop. We are dedicated to helping you enhance your natural beauty with our extensive collection of high-quality makeup products. Whether you're a makeup enthusiast, a professional artist, or new to the world of cosmetics, we have something special just for you.</p>
                </div>
            </div>
        </div>
    )
}

export default About;



