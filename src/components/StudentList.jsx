import React, { useState } from 'react'
import students from '../data/students'
import StudentCard from './StudentCard'

export default function StudentList(){
  const [visibleCount, setVisibleCount] = useState(10)

  const showMore = ()=>{
    setVisibleCount(prev => Math.min(20, prev + 10))
  }

  const visible = students.slice(0, visibleCount)

  return (
    <main>
      <header className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h1 className="h3 mb-0">Student Catalog</h1>
          <p className="text-muted small mb-0">Browse students — card grid</p>
        </div>
      </header>

      <section className="row g-3">
        {visible.map(s=> (
          <StudentCard key={s.id} student={s} />
        ))}
      </section>

      <div className="text-center mt-4 mb-5">
        {visibleCount < 20 ? (
          <button className="btn btn-primary btn-lg" onClick={showMore}>See More</button>
        ) : (
          <button className="btn btn-secondary btn-lg" disabled>All loaded</button>
        )}
      </div>
    </main>
  )
}
