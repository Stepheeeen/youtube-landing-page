import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-5'>
      <h1 className='text-2xl text-blue-500 font-bold'>LOGO</h1>
      <div className='flex justify-between items-center gap-5'>
        <p className="text-[#252525] font-bold">08168192858</p>
        <button>
          <h1 className='text-blue-500 font-bold'> Sign in</h1>
        </button>
        <button>
          <h1 className='text-blue-500 border-blue-500 border-[1px] p-1 font-bold'> Sign up</h1>
        </button>
      </div>
    </div>
  );
}

export default Navbar
