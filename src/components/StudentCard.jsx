import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function StudentCard({student}){
  const navigate = useNavigate()
  const openDetail = ()=> navigate(`/students/${student.id}`)

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card p-3 h-100" onClick={openDetail} style={{cursor:'pointer'}}>
        <div className="d-flex gap-3 align-items-center">
          <img src={student.photo} alt={`${student.first} ${student.last}`} className="student-photo" />
          <div className="flex-fill">
            <h5 className="mb-1">{student.first} {student.last}</h5>
            <div className="text-muted small">{student.group} • Year {student.year}</div>
          </div>
        </div>
        <div className="mt-3 text-end">
          <span className="badge bg-light text-dark">GPA: <strong>{student.gpa}</strong></span>
        </div>
      </div>
    </div>
  )
}
