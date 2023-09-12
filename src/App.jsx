import { useState } from 'react'
import './App.css'
import CinemaData from './components/index';

function App() {
  const [activeSection, setActiveSection] = useState('Section 1');
  const [genero, setGenero] = useState('filmes')

  function handleChangeSection(sectionName) {
    setActiveSection(sectionName)
    switch(activeSection) {
      case 'Section 1':
        setGenero('filmes');
        break;
      case 'Section 2':
        setGenero('desenhos');
        break;
      case 'Section 3':
        setGenero('series');
        break;
    }
  }

  return (
    <>
    <h1>CINEMA</h1>

    <div class="body">
      
      <div class="botao">
        <button className={activeSection === 'Section 1' ? 'active' : ''} onClick={() => handleChangeSection('Section 1')}> Filmes </button>
        <button className={activeSection === 'Section 2' ? 'active' : ''} onClick={() => handleChangeSection('Section 2')}> Desenhos </button>
        <button className={activeSection === 'Section 3' ? 'active' : ''} onClick={() => handleChangeSection('Section 3')}> Séries </button>
      </div>

      <div>
          <CinemaData genero={genero}/> {}
      </div>
    </div>
    </>
  )
}

export default App

// https://raw.githubusercontent.com/anaclaracampos/projetoAPI/main/desenhos.json
// https://raw.githubusercontent.com/anaclaracampos/projetoAPI/main/filmes.json
// https://raw.githubusercontent.com/anaclaracampos/projetoAPI/main/series.json
     