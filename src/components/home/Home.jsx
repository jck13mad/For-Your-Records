import React, { Component } from "react";
import './Home.scss'
import cover from '../../pics/album.png'

class Home extends Component {
    render() {
        return(
            <div className="home">
                <img className='album' src={cover} alt="Album Cover" />
                <a href="/listening"><h1 className="listen">Listen Now</h1></a>
            </div>
        )
    }
}

export default Home