import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()

  return (
    <div className='flex flex-col'>
        <h2 className='mx-auto mt-20 lg:px-0 text-center'> 404 | Page Not Found</h2>
        <br/>
        <button onClick={()=>navigate('/')} className='mx-auto btn-grad'>Go back to homepage</button>
    </div>
  )
}

export default Error