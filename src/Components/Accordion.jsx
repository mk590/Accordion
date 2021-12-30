import React from 'react'
import Adata from './Adata'
import Single from './Single'
import Single2 from './Single2'
import { useState } from 'react'
import numWord from 'number-to-words'


const Accordion = () => {

    const [data, setData] = useState(Adata)
    const [data1, setData1] = useState(Adata)

    return (
        <div>
          <h2>A simple Accordion </h2>  
          {data.map((elemant,index)=>{
              let id=index+1;
         let idString=numWord.toWords(id)
         console.log(idString)

              return <Single id={idString} {...elemant}/>
          })}

          <h3>A simple accordion version 2</h3>
          {data1.map((elemant)=>{
              return <Single2  {...elemant}/>
          })}
        </div>
    )
}

export default Accordion
