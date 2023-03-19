import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    }


    return (
        <div id='contact' className='contact'>
            <p>Get in Touch</p>
            <div className='contact_container'>
                <div className='contact_detail_container'>
                    <h2>Let's talk about everything!</h2>
                    <p>Don't like forms? Send me an email.👋</p>
                </div>
                <div className='contact_form_container'>
                    <form className="contact_form" onSubmit={handleSubmit}>
                        <div className="form_row">
                            <input type="text" placeholder='name' id="name" name="name" value={formData.name} onChange={handleChange} />
                            <input type="email" placeholder='email' id="email" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="form_row">
                            <input type="text" placeholder='subject' id="subject" name="subject" value={formData.subject} onChange={handleChange} />
                        </div>
                        <div className="form_row">
                            <textarea id="message" placeholder='message' name="message" value={formData.message} onChange={handleChange}></textarea>
                        </div>
                        <button type="submit" className='contact_submit' disabled={!formData.name || !formData.email || !formData.subject || !formData.message}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact