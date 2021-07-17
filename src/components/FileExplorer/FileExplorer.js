import React from 'react'
import Button from '../Button/Button'
import './FileExplorer.css'

const FileExplorer = ({
    editorState,
    onSelectionChange
}) => {
    return (
        <div className='FileExplorer'>
            <p>File Explorer</p>
            <div className='buttons'>
                <Button 
                    clicked={editorState === 1 ? true : false}
                    fileName='Index.html'
                    onClick={onSelectionChange}
                    fileType='html'
                />
                <Button
                    clicked={editorState === 2 ? true : false} 
                    fileName='Index.css'
                    onClick={onSelectionChange}
                    fileType='css'
                />
                <Button 
                    clicked={editorState === 3 ? true : false}
                    fileName='Index.js'
                    onClick={onSelectionChange}
                    fileType='js'
                />
            </div>
        </div>
    )
}

export default FileExplorer
