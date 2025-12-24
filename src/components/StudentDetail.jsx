import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import students from '../data/students'

export default function StudentDetail(){
  const { id } = useParams()
  const navigate = useNavigate()
  const student = students.find(s => String(s.id) === String(id))

  if(!student){
    return (
      <div>
        <button className="btn btn-outline-secondary mb-3" onClick={()=>navigate('/')}>← Back to List</button>
        <p>Student not found.</p>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-3">
        <button className="btn btn-outline-secondary" onClick={()=>navigate('/')}>← Back to List</button>
      </div>

      <div className="card shadow-sm">
        <div className="row g-0 align-items-center">
          <div className="col-12 col-md-4 text-center p-4">
            <img src={student.photo} alt={`${student.first} ${student.last}`} className="rounded img-fluid detail-photo" />
          </div>
          <div className="col-12 col-md-8">
            <div className="card-body">
              <h2 className="card-title h4 mb-2">{student.first} {student.last}</h2>
              <ul className="list-unstyled mb-0">
                <li><strong>ID:</strong> {student.id}</li>
                <li><strong>Group:</strong> {student.group}</li>
                <li><strong>Year:</strong> {student.year}</li>
                <li><strong>GPA:</strong> {student.gpa}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
