import React from 'react'
import './DisplayRender.css'

const DisplayRender = ({webPage}) => {
    return (
        <div className='DisplayRender'>
            <iframe
            title='Live View'
            height="100%"
            width="100%"
            sandbox="allow-scripts"
            srcDoc={webPage}/>
        </div>
    )
}

export default DisplayRender
