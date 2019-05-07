import React, { Component } from 'react';
import {
    BrowserRouter as Router, Link } from 'react-router-dom';

import icon1 from '../assets/logo-1.png';
import icon2 from '../assets/logo-2.png';
import icon3 from '../assets/logo-3.png';
import icon4 from '../assets/logo-4.png';
import icon5 from '../assets/logo-5.png';

import collage1 from '../assets/collage1.png';
import collage2 from '../assets/collage2.png';
import collage3 from '../assets/collage3.png';

class Landing extends Component {

    state = {
        collages: [
            {id: 1, subcollages: [1]},
            {id: 2, subcollages: [2, 3]},
            {id: 3, subcollages: [4, 5]},
        ],
        onCollage: false
    }

    render() {

        console.log(window.innerHeight, window.innerWidth);
        console.log(0.6 * window.innerWidth - ((window.innerHeight - 510) / 2));
        const x1 = 0.6 * window.innerWidth - ((window.innerHeight - 510) / 2);
        const x2 = 0.6 * window.innerWidth + 255;

        return (
            <div className={(this.state.onCollage ? 'inverted' : '') + " landing-container"}>
                <img src={icon1} alt="collage" id="img1" className="collage1"></img>
                <img src={icon2} alt="collage" id="img2" className="collage2"></img>
                <img src={icon3} alt="collage" id="img3" className="collage2"></img>
                <img src={icon4} alt="collage" id="img4" className="collage3"></img>
                <img src={icon5} alt="collage" id="img5" className="collage3"></img>

                <img src={collage1} alt="collage" id="collage1" className="full-collage"></img>
                <img src={collage2} alt="collage" id="collage2" className="full-collage"></img>
                <img src={collage3} alt="collage" id="collage3" className="full-collage"></img>

                <div className="landing-title">
                    <h1>MICHELLE VERSILLÉ</h1>
                </div>
                <div className="landing-menu">
                    <div className="menu-elements">
                        <Link className="element" to='/work'>Travail</Link>
                        <Link className="element" to='/about'>À Propos</Link>
                        <Link className="element" to='/contact'>Contact</Link>
                    </div>
                    <svg className="triangle">
                        <polygon points="50,0 50,100 0,100" />
                    </svg>
                </div>


                <svg className="line">
                    <line x1="0" y1="150.5" x2="100%" stroke-dasharray="6, 4" y2="150.5" />
                    <line x1="0" y1="209.5" x2="100%" stroke-dasharray="6, 4" y2="209.5" />
                    <line x1="69.95%" y1="0" x2="69.95%" stroke-dasharray="6, 4" y2="100%" />

                    <line x1="0" y1="510.5" x2="100%" stroke-dasharray="6, 4" y2="510.5" />
                    <line x1="0" y1="609.5" x2="100%" stroke-dasharray="6, 4" y2="609.5" />

                    <line x1={x2} y1="0" x2={x1} y2="100%" stroke-dasharray="6, 4" />
                </svg>
            </div>
        );
    }

    componentDidMount() {
        for (let i = 1; i < 6; i++) {
            const that = this;
            document.getElementById('img' + i).addEventListener('mouseover', function(e) {
                that.state.collages.forEach(collage => {
                    if (collage.subcollages.indexOf(Number(this.id.split('img')[1])) !== -1) {
                        document.getElementById('collage' + String(collage.id)).style.opacity = 1;
                        that.setState({onCollage: true});
                    }
                });
            });

            document.getElementById('img' + i).addEventListener('mouseout', function(e) {
                that.state.collages.forEach(collage => {
                    if (collage.subcollages.indexOf(Number(this.id.split('img')[1])) !== -1) {
                        document.getElementById('collage' + String(collage.id)).style.opacity = 0;
                        that.setState({onCollage: false});
                    }
                });
            });
        }
    }
}

export default Landing;