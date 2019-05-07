import React, { Component } from 'react';
import WorkElement from './WorkElement';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {
    BrowserRouter as Router, Link } from 'react-router-dom';

import collage1 from '../assets/collage1.png';
import collage2 from '../assets/collage2.png';
import collage3 from '../assets/collage3.png';

class Work extends Component {
    render() {
        return (
            <div className="work-container">
                <svg className="line">
                    <line x1="0" y1="50.5" x2="100%" stroke-dasharray="6, 4" y2="50.5" />
                    <line x1="0" y1="109.5" x2="100%" stroke-dasharray="6, 4" y2="109.5" />

                    <line x1="80%" y1="0" x2="100%" stroke-dasharray="6, 4" y2="40%" />
                    <line x1="0" y1="95%" x2="100%" stroke-dasharray="6, 4" y2="20%" />
                </svg>

                <h1 className="work-title">
                    <Link className="link" to='/'>
                        <KeyboardBackspaceIcon className="back-icon"></KeyboardBackspaceIcon>
                    </Link>
                    <span>Travail</span>
                </h1>

                <div className="work-content">
                    <WorkElement img={collage1} title="Collage 1 titre (2018)" dimensions="32cm x 24cm"></WorkElement>
                    <WorkElement img={collage2} title="Collage 2 titre (2018)" dimensions="32cm x 24cm"></WorkElement>
                    <WorkElement img={collage3} title="Collage 3 titre (2018)" dimensions="32cm x 24cm"></WorkElement>
                </div>
            </div>
        );
    }
}

export default Work;