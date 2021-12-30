import React from 'react'
import { useState } from 'react'

const Single2 = (props) => {
    const [show, setshow] = useState(!true)
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-11">
                        <p>{props.heading} </p>

                    </div>
                    <div className="col-md-1">
                        <span onClick={() => setshow(!show)}>{show ? '-' : '+'} </span>

                    </div>
                </div>
            <div className='row'>
                {show ? <p>{props.detail}</p> : ''}
            </div>
            </div>
        </div>
    )
}

export default Single2
