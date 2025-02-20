
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import Insert from './Pages/Insert'
import Display from './Pages/Display'
import Search from './Pages/Search'
import Update from './Pages/Update'
import Edit from './Pages/Edit'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='insert' element={<Insert/>}/>
      <Route path='display' element={<Display/>}/>
      <Route path='search' element={<Search/>}/>
      <Route path='update' element={<Update/>}/>
      <Route path='edit/:id' element={<Edit/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
