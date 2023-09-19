import { useState } from 'react'
import './App.css'
import Navbar from './Components/Layout/Navbar'
import { Route, Routes } from 'react-router-dom'
import StudentList from './Components/Student/StudentList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
          <Route path='/' element={<StudentList/>}/>
      </Routes>
    </>
  )
}

export default App
