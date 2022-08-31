import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Typewriter from 'typewriter-effect';

function App() {
  return (
    <div className="App">
      <h1 className='text-black font-black text-7xl'>BOLD TEXT</h1>
    </div>
  )
}

export default App

function NewFunction(props) {
  return <Typewriter
    options={{
      strings: [props.name],
      autoStart: true,
      loop: true,
    }} />;
}
