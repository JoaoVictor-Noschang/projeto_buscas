import './App.css'

import HeaderPag from './components/HeaderPag'
import SectionHome from './components/SectionHome'
import SectionCardsPessoas from './components/SectionCardsPessoas'
import FooterPag from './components/FooterPag'

import PagDetalhesPessoa from './components/PagDetalhesPessoa.jsx'

function App() {
  return (
    <div>
      <HeaderPag />
      <SectionHome />
      <SectionCardsPessoas />
      <FooterPag />

      <PagDetalhesPessoa />
    </div>
  )
}

export default App
