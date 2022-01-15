import data from '../../data'
import React, { useState } from 'react';

function Listening() {

    const [current, setCurrent] = useState(0)

    return(
        <div className='listening' style={{
            background: data + '.[' + {current} + '].background'
        }}><button onClick={setCurrent(current+1)}>CLICK ME {current}</button></div>
    )
}

export default Listening
