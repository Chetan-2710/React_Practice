import React from 'react'

export function Colors({colors,setColor}) {
    return (
        <>
            <button 
              onClick={()=>setColor(colors)}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:colors}}>{colors}</button>  
        </>
    )
}

export default Colors;