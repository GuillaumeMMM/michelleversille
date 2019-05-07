import React, { Component } from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {
    BrowserRouter as Router, Link } from 'react-router-dom';

class Contact extends Component {
    render() {
        return (
            <div className="contact-container">
                <svg className="line">
                    <line x1="0" y1="50.5" x2="100%" stroke-dasharray="6, 4" y2="50.5" />
                    <line x1="0" y1="109.5" x2="100%" stroke-dasharray="6, 4" y2="109.5" />

                    <line x1="0%" y1="80%" x2="100%" stroke-dasharray="6, 4" y2="40%" />
                </svg>

                <h1 className="contact-title">
                    <Link className="link" to='/'>
                        <KeyboardBackspaceIcon className="back-icon"></KeyboardBackspaceIcon>
                    </Link>
                    <span>Contact</span>
                </h1>

                <div className="contact-content">
                    <a className="link link-inverted" href = "mailto: contact@michelleversille.com">contact@michelleversille.com</a>
                </div>
            </div>
        );
    }
}

export default Contact;