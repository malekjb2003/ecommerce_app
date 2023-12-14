import React, { useState } from "react";
import './App.css';


function Contact() {
    const [formData, setFormData] = useState({
        subject: "",
        name: "",
        email: "",
        phone: "",
        comment: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(formData);
    };

    return (
        <div className="contact-container">
            <div className="card" style={{ width: '400px' }}>
                <div className="card-body">
                    <h2 className="card-title">Contact Us</h2>
                    <p className="card-text">Please fill out the form below to send your inquiry to our Customer Service.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="subject">Subject *</label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Choose</option>
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Product Support">Product Support</option>
                                <option value="Billing Issue">Billing Issue</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Your Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email Address *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Your Phone Number *</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="comment">Your Comment *</label>
                            <textarea
                                id="comment"
                                name="comment"
                                value={formData.comment}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">SUBMIT FORM</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
