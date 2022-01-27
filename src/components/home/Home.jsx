import React, { Component } from "react";
import './Home.scss'
// import cover from '../../pics/album.png'
import opposite_cut from '../../pics/opposite-cut.png'
import Parallax from "../parallax/Parallax";

class Home extends Component {
    render() {
        window.addEventListener('resize', console.log(window.innerWidth))
        return(
            <div className="home">
                <section className="album-parallax">
                    <img src={opposite_cut} alt="Opposite Cut" className="opposite_cut" />
                    <Parallax className="parallax"/>
                </section>
                <a href="/listening"><h1 className="listen">CLICK HERE TO LISTEN</h1></a>
                <h1 className="name">SAM YOUNG</h1>
                <h1 className="title">FOR YOUR RECORDS</h1>
            </div>
        )
    }
}

export default Home