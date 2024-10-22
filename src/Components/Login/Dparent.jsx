import React, { useState } from 'react'
import Dashboard from './Dchild'
import Dchild from './Dchild';

const Dparent = () => {
  const [Dashboard, setDashboard] = useState(false);
  return (
    <div className='  justify-center items-center flex relative'>

      

      {Dashboard ? <Dchild setDashboard={setDashboard}/> : <div className=' absolute top-20 border-2 border-gray-400/ bg-red-400
       h-[15rem] w-[15rem] items-center justify-center flex'>

<div className=' absolute top-3 ml-8'>
        <label htmlFor="">Email: <br />
        <input type="text" placeholder='enter email' className=' rounded py-1 '/>
      </label> <br /> <br />

      <label htmlFor="">Password: 
        <input type="password" placeholder='' className=' rounded py-1' />
      </label>
</div>

      <button className='flex justify-center items-center bg-blue-800 text-xl p-4 hover:bg-blue-400/80 text-white 
      rounded-md mt-[9.5rem]'  onClick={()=> setDashboard(true)}>LOGIN</button>
      </div>}  <br />
       

    </div>
  )
}

export default Dparent
