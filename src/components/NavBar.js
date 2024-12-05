
import React, {Component} from 'react'

export class NavBar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{backgroundColor:  '#F28D3F'}}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Constitution of India</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        </div>
                    </div>
                    </nav>
            </div>
        )
    }
}

export default NavBar