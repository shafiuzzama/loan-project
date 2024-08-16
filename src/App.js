import React from 'react'
import Navbar from './components/navsection/Navbar'

const App = () => {
  return (
    <>
  <Navbar/>
    <div className='h-screen bg-yellow-700 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 sm:gap-y-6 md:bg-purple-600 md:text-4xl font-medium'>
      <div className='bg-white border w-full shadow-lg rounded-md'>first card</div>
      <div className='bg-white border w-full shadow-lg rounded-md'>first card</div>
      <div className='bg-white border w-full shadow-lg rounded-md'>first card</div>
      <div className='bg-white border w-full shadow-lg rounded-md'>first card</div>
    </div>

    </>

  )
}

export default App