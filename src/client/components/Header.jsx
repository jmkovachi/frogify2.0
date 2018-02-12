import React, { Component } from 'react';
import '../public/scss/application.scss';

export default class Header extends Component {
    render() {
        return(
            <div>
                <div> <h1 className="frogify"> Frogify <i className="fas fa-arrow-alt-circle-up"></i> </h1>   </div>
                <div></div>
            </div>
        );
    }
}