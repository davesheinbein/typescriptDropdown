// import React, { useState } from 'react'
import Select from './Select'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const options = [
    {label: "first", value: 1},
    {label: "two", value: 2},
    {label: "three", value: 3},
    {label: "four", value: 4},
    {label: "five", value: 5},
  ]

  return (
    <div className="app">
      <Select options={options} />
    </div>
  )
}

export default App
