import './App.css';
import { useEffect, useState } from 'react';
import FileExplorer from './components/FileExplorer/FileExplorer';
import DisplayRender from './components/DisplayRender/DisplayRender';
import CodeEditor from './components/CodeEditor/CodeEditor';
import Header from './components/Header/Header';

function App() {
  const [webPage, setWebPage] = useState('')
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [editorState, setEditorState] = useState(1)
  const switchFile = (key) => {
    switch (key) {
      case 1:
        return (<CodeEditor
                  title='HTML'
                  onChange={setHtml}
                  language='xml'
                  code={html}
                />)
      case 2:
        return (<CodeEditor
                  title='CSS'
                  onChange={setCss}
                  language='css'
                  code={css}
                />)
      case 3:
        return (<CodeEditor
                  title='JS'
                  onChange={setJs}
                  language='javascript'
                  code={js}
                />)
      default:
        break;
    }
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      setWebPage(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>`)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [html, css, js])
  const onSelectionChange = (file) => {
    if(file === 'html') setEditorState(1)
    if(file === 'css') setEditorState(2)
    if(file === 'js') setEditorState(3)
  }
  return (
    <div className="App">
      <Header/>
      <div className='core'>
        <div className='exp-editor'>
          <FileExplorer 
            editorState={editorState}
            onSelectionChange={onSelectionChange}
          />
          {switchFile(editorState)}
        </div>
        <div className='live-view'>
          <h2>Live View</h2>
          <DisplayRender webPage={webPage}/>
        </div>
        
      </div>
    </div>
  );
}
export default App;
