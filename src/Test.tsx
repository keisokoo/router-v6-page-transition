import React from 'react'
import { Link } from 'react-router-dom'

const Test = () => {
  return (
    <div className="Test">
      Test
      <div>
        <Link to="/asd">asd</Link>
      </div>
      <div>
        <Link to="/">Main</Link>
      </div>
    </div>
  )
}
export default Test
