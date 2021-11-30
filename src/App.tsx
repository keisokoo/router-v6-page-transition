import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Main from './Main'
import Test from './Test'
import RouteComponent from './RouteComponent'

function App() {
  return (
    <BrowserRouter>
      <RouteComponent />
    </BrowserRouter>
  )
}

export default App
