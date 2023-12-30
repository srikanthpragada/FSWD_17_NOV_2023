import React, { useState } from 'react'

export default function Counter() {
  var [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1)
  }

  function decrement() {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Dec</button>
    </>

  )
}
