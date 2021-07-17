import React from 'react'
import './Button.css'
const Button = ({fileName, clicked, onClick, fileType}) => {
    return (
            <button
            onClick={() => onClick(fileType)}
            className={`${clicked ? 'file-button clicked' : 'file-button'}`}
            >{fileName}</button>
    )
}

export default Button
