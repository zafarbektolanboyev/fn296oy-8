import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Users from './pages/Users'
import Books from './pages/Books'

function App() {
  //const WEATHER_API = "e3b2b4ada691d782341413e2952e86e4";
  return (
    <div>
      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path='/movie' element={<Movie></Movie>}></Route>
        <Route path='/users' element={<Users></Users>}></Route>
        <Route path='/books' element={<Books></Books>}></Route>
      </Routes>
    </div>
  )
}

export default App
