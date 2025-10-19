import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Canada from './components/Canada'
import Brasil from './components/Brasil'
import Noruega from './components/Noruega'
import Suica from './components/Suica'
import './App.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  

  return (
    <main>
      <Router>
        <Header/>
          <Routes>
            <Route path='/' element= {<Home />} />
            <Route path='/Canada' element= {<Canada />} />
            <Route path='/Brasil' element= {<Brasil />} />
            <Route path='/Noruega' element= {<Noruega />} />
            <Route path='/Suica' element= {<Suica />} />
        </Routes>
        <Footer />
        </Router>
      
    </main>
  )
}

export default App
