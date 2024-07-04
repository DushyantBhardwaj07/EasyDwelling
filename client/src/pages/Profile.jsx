import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
  const {currentUser}  = useSelector((state) => state.user);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-5'>
      <img src={currentUser.avatar} className='rounded-full h-27 w-27 object-cover cursor-pointer self-center mt-2'/>

      <input className = 'p-3 border rounded-lg' type='text' placeholder='Username' id = 'username' />
      <input className = 'p-3 border rounded-lg' type='email' placeholder='Email' id = 'email' />
      <input className = 'p-3 border rounded-lg' type='password' placeholder='Password' id = 'password' />

      <button className=' bg-slate-700 text-white uppercase rounded-lg p-3 hover:opacity-95 disabled:opacity-80'>update</button>
      </form>
      <div className='flex justify-between mt-3 font-semibold'>
        <span className='text-red-600 cursor-pointer'>Delete Account</span>
        <span className='text-red-600 cursor-pointer'>Sign Out</span>
      </div>

    </div>
  )
}
