import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import {Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import AdminPanel from './pages/AdminPanel';
import ImageUploader from '../src/components/testBase64'

function App() {

  return (
    <>
    <Header/>
    <Routes className="body">
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<Product/>}/>
      <Route path='/test64' element={<ImageUploader/>}/>
      <Route path='/administrator/*' element={<AdminPanel/>}/>

    </Routes>
     <Footer /> 
    </>

  )
}

export default App
