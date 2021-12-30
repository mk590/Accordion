import React from 'react'

const Single = (props) => {

   
    return (
        <>


            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id={`heading${props.id}`}>
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${props.id}`} aria-expanded="false" aria-controls="collapseOne">
                           {props.heading}
                        </button>
                    </h2>
                    <div id={`collapse${props.id}`} className="accordion-collapse collapse show" aria-labelledby={`heading${props.id}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                       {props.detail}
                        </div>
                    </div>
                </div>
                
               
            </div>



{console.log(props.id)}


        </>
    )
}

export default Single
