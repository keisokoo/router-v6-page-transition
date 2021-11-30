import React from 'react'
import { Link } from 'react-router-dom'

const MainTest = () => {
  return (
    <div className="MainTest">
      MainTest
      <div>
        <Link to="/">Main</Link>
      </div>
      <div>
        <Link to="/test">Test</Link>
      </div>
    </div>
  )
}
export default MainTest
