import React from 'react'
import { Routes, Route } from 'react-router-dom'
import StudentList from './components/StudentList'
import StudentDetail from './components/StudentDetail'

export default function App(){
  return (
    <div className="container py-4">
      <Routes>
        <Route path="/" element={<StudentList/>} />
        <Route path="/students/:id" element={<StudentDetail/>} />
      </Routes>
    </div>
  )
}
