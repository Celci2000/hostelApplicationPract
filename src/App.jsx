import React from 'react'
import Form from './Form.js'
import { BrowserRouter,Routes, Route  } from "react-router-dom"
import Display from "./display.js"

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={  <Form />}></Route>
            <Route path="/get-details" element={  <Display />}></Route>
        </Routes>
        </BrowserRouter>
    

    </div>
  )
}

export default App
