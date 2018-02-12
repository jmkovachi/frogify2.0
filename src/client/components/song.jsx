import React, { Component } from 'react';

class Song extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artist : 'yo',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        console.log(this);
        e.preventDefault();

        fetch('/frogify', {
            method: 'post',
            headers: {
                'Content-Type':'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                'artist' : 'Kanye West',
            }),
        })
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            this.setState({
                artist : json.artist,
            });
        });
    }
    
    render() {
        return (
            <div className="container">
                <div className="row-sm">
                    <div className="col-sm">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><h1> MBDTF </h1> </li>
                            <li className="list-group-item"><h1> {this.state.artist} </h1> </li>
                        </ul>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default Song;