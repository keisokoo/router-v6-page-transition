import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className="Main">
      Main
      <div>
        <Link to="/asd">asd</Link>
      </div>
      <div>
        <Link to="/test">Test</Link>
      </div>
    </div>
  )
}
export default Main
