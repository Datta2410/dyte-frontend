import React from 'react'
import './CodeEditor.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/isotope.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as CodeMirror} from 'react-codemirror2'

const CodeEditor = ({
    title,
    code,
    language,
    onChange}) => {
    
        const handleChange = (editor, language, code) => {
        onChange(code)
    }
    return (
        <div className='editor'>
            <p>{title}</p>
            <CodeMirror
            value={code}
            className='wrapper'
            onBeforeChange={handleChange}
            options={{
                mode: language,
                lineNumbers: true,
                lint: true,
                lineWrapping: true,
                theme: 'isotope',
              }}/>
        </div>
    )
}

export default CodeEditor
