import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Subscribe from './pages/Subscribe'

function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/subscribe' element={<Subscribe />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
