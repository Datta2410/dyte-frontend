import './App.css';
import { useEffect, useState } from 'react';
import FileExplorer from './components/FileExplorer/FileExplorer';
import DisplayRender from './components/DisplayRender/DisplayRender';
import CodeEditor from './components/CodeEditor/CodeEditor';
import Header from './components/Header/Header';
import * as pastebin from "./api/pastebin";

function App() {
  const [webPage, setWebPage] = useState('') // maintains the state of the live view 
  const [html, setHtml] = useState('') // maintains the state of the HTML code typed in the HTML code Editor
  const [css, setCss] = useState('') // maintains the state of the CSS code typed in the HTML code Editor
  const [js, setJs] = useState('') // maintains the state of the Javascript code typed in the HTML code Editor
  const [editorState, setEditorState] = useState('html') // maintains the state of the selection of the file in the file explorer
  const [savedLink, setSavedLink] = useState('')
  // the following function switches the file based on the selection of the user
  const switchFile = (key) => {
    switch (key) {
      case 'html':
        return (<CodeEditor
                  title='HTML'
                  onChange={setHtml}
                  language='xml'
                  code={html}
                />)
      case 'css':
        return (<CodeEditor
                  title='CSS'
                  onChange={setCss}
                  language='css'
                  code={css}
                />)
      case 'js':
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
  //the following function is triggered when HTML, CSS, or JS 
  //in the editors are changed and hot-reloads the Live view
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
  useEffect(() => {
    const queryParams = window.location.search
    pastebin.getPaste({pasteId:queryParams.substring(4)})
      .then(resp => {
        let start = resp.indexOf('<body>') + 6
        let end = resp.indexOf('</body>') 
        setHtml(resp.substring(start, end))
        start = resp.indexOf('<style>') + 7
        end = resp.indexOf('</style>') 
        setCss(resp.substring(start, end))
        start = resp.indexOf('<script>') + 8
        end = resp.indexOf('</script>') 
        setJs(resp.substring(start, end))
      })
      .catch(error => console.log(error))
  }, [])
  return (
    <div className="App">
      <Header/>
      <div className='core'>
        <div className='exp-editor'>
          <div className='app-explorer'>
            <FileExplorer 
              editorState={editorState}
              onSelectionChange={setEditorState}
            />
            <button 
            onClick={() => {
                pastebin.createPaste(webPage) 
                .then(resp => setSavedLink(resp.toString().replace("https://pastebin.com/", "https://datta2410.github.io/dyte-frontend/?id=")))
                .catch(error => console.log(error))
            }}
            className='save-button'
            ><p>Save</p>
            </button>
            {savedLink !== '' ? (<p className='saved-link'>{savedLink}</p>) : (<p></p>)}
          </div>
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
