import React, { Component } from 'react';

class WorkElement extends Component {
    render() {
        return (
            <div className="work-element-container">
                <img className="work-element-img" src={this.props.img} alt="collage"></img>
                <div className="legend">
                    <p className="work-element-title">{this.props.title}</p>
                    <p className="work-element-dimensions">{this.props.dimensions}</p>
                </div>
            </div>
        );
    }
}

export default WorkElement;