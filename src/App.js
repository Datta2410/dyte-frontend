import './App.css';
import { useEffect, useState } from 'react';
import FileExplorer from './components/FileExplorer/FileExplorer';
import DisplayRender from './components/DisplayRender/DisplayRender';
import CodeEditor from './components/CodeEditor/CodeEditor';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [webPage, setWebPage] = useState(`
    <html>
    <body><h1>hi this is a test</h1></body>
    {/* <style></style> */}
    </html>
    `
  )
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setWebPage(`
  //       <html>
  //         <body><h1>hi this is a test</h1></body>
  //         <style></style>
  //         <script></script>
  //       </html>
  //     `)
  //   }, 250)

  //   return () => clearTimeout(timeout)
  // }, [])
  return (
    <div className="App">
      <Header/>
      <div className='core'>
        <div className='exp-editor'>
          <FileExplorer/>
          <CodeEditor/>
        </div>
        <DisplayRender webPage={webPage}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
