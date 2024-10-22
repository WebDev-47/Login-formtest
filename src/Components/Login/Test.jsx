import React from 'react'

const Test = ({SetAdmin}) => {
  return (
    <div>
        <div className=' bg-red-500 h-screen flex items-center justify-center'>
        welcome Web
        
 
      <button onClick={()=> SetAdmin(false)} className='bg-blue-500 p-2 text-white'>Logout</button></div> 
    </div>
  )
}

export default Test
