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
                    clicked={editorState === 'html' ? true : false}
                    fileName='Index.html'
                    onClick={onSelectionChange}
                    fileType='html'
                />
                <Button
                    clicked={editorState === 'css' ? true : false} 
                    fileName='Index.css'
                    onClick={onSelectionChange}
                    fileType='css'
                />
                <Button 
                    clicked={editorState === 'js' ? true : false}
                    fileName='Index.js'
                    onClick={onSelectionChange}
                    fileType='js'
                />
            </div>
            {/* <button 
            onClick={() => {
                // pastebin.getPaste({pasteId:'KyTF8sAS'})
                // .then(resp => console.log(resp))
                // .catch(error => console.log(error))
                pastebin.createPaste({
                    html:"<h1>this is all test</h1>",
                    css:"background-color: blue",
                    js: "const test = "this is a test";"
                }) 
                .then(resp => console.log(resp))
                .catch(error => console.log(error))
            }}
            className='save-button'
            ><p>Save</p>
            </button> */}
        </div>
    )
}

export default FileExplorer
