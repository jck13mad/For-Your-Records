import data from '../../data'
import React, { useState } from 'react';
import './Listening.scss'

function Listening() {

    const [current, setCurrent] = useState(0)

    return(
        <div className='listening' style={{
            backgroundImage: `url(` + data[current].bg + `)`
        }}>
            <button onClick={() => setCurrent(current+1)}>{current}</button>
            <a href="/"><h1 className="back">Back to Main</h1></a>
        </div>
    )
}

export default Listening
