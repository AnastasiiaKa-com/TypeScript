import React from 'react'
import { Link } from 'react-router-dom'

export default function NoPage() {
  return (
    <div>
      <h2>404: No such page 🔎 </h2>
      
      <Link to='/'>To home page🤞</Link>
    </div>
  )
}
