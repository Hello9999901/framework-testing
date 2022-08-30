import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Typewriter from 'typewriter-effect';

function App() {
  return (
    <div className="App">
      <h1 className='text-black font-black text-7xl'>BOLD TEXT</h1>
      <div className='absolute w-[1000px] h-[1000px] rounded-full -ml-20 -right-[300px] bg-gradient-to-tr from-red-500 to-[#9A1D2E]'/>
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
