import React, { Component } from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {
    BrowserRouter as Router, Link } from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div className="about-container">
                 <svg className="line">
                    <line x1="0" y1="50.5" x2="100%" stroke-dasharray="6, 4" y2="50.5" />
                    <line x1="0" y1="109.5" x2="100%" stroke-dasharray="6, 4" y2="109.5" />

                    <line x1="30%" y1="0%" x2="0%" stroke-dasharray="6, 4" y2="100%" />
                </svg>

                <h1 className="about-title">
                    <Link className="link" to='/'>
                        <KeyboardBackspaceIcon className="back-icon"></KeyboardBackspaceIcon>
                    </Link>
                    <span>À Propos</span>
                </h1>

                <div className="about-content">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit neque id augue gravida, vel vehicula massa lobortis. Donec maximus felis vel commodo tincidunt. Vestibulum eu augue ac enim fermentum mattis vehicula et enim. Nullam auctor, magna at ullamcorper feugiat, metus nunc ultrices velit, sed viverra nisl mi nec mi. Maecenas sed elit eget tortor tincidunt porttitor non ac ligula. In laoreet volutpat venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sed viverra nulla.
                    </p>

                    <p>Duis ut mollis enim. Nunc aliquet rutrum ante sit amet aliquam. Fusce ut quam quam. Maecenas vitae condimentum lectus. Quisque sodales tellus nec cursus suscipit. Aliquam vitae risus at nisl hendrerit porttitor sed quis nibh. Nam ac congue justo. Ut sit amet nulla venenatis, varius odio ut, blandit metus. Ut consectetur, ex a porta laoreet, neque neque sodales nisi, vel pretium leo ante eget enim. Nulla facilisi.
                    </p>

                    <p>
                    Aliquam venenatis tellus a erat efficitur, eu maximus nulla viverra. Cras feugiat mollis posuere. In rhoncus ipsum in nibh semper, quis dictum purus condimentum. Donec auctor, leo et rutrum varius, lectus urna blandit turpis, sed convallis mi erat vel quam. Curabitur nunc felis, auctor non commodo in, lobortis ut lectus. Sed quis aliquet felis. Integer vel dictum erat. Donec iaculis, enim sit amet interdum iaculis, dolor velit fermentum libero, id iaculis augue augue ut neque. Proin rhoncus lorem vitae enim tempus auctor. Donec vestibulum, enim vitae pellentesque lacinia, nisl quam rhoncus lectus, eu cursus purus mi sed risus. Quisque consectetur, sem id ultrices bibendum, velit quam vehicula tellus, efficitur luctus ante risus at nisi.
                    </p>
                </div>
            </div>
        );
    }
}

export default About;