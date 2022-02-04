import React, { Component } from "react";
import './Parallax.scss'
import Tilt from 'react-parallax-tilt';
// import body from '../../pics/body.png'
// import words from '../../pics/words.png'
// import advisory from '../../pics/advisory.png'
import cut from '../../pics/cut.webp'

class Parallax extends Component {
    render() {
        return(
            <div className="parallax">
                <Tilt className="parallax-tilt"
                    perspective={800}
                    glareEnable={false}
                    // glareMaxOpacity={0.45}
                    scale={1.04}
                >
                    <div className="cut">
                        <img src={cut} alt="album" className="cut" />
                    </div>
                </Tilt>
            </div>
        )
    }
}

export default Parallax