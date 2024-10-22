import React, { useState } from 'react'
import Test from './Test';

const Rendering = () => {
    const [Admin, SetAdmin] = useState(false);
  return (

    <div>
           

       {Admin ? <Test SetAdmin={SetAdmin}/> : <h1 className='flex justify-center items-center bg-blue-500 text-xl'>Welcome zn</h1>}  <br />
       <button className='flex justify-center items-center bg-blue-500 text-xl p-4'  onClick={()=> SetAdmin(true)}>Login</button>



    </div>
  )
}

export default Rendering