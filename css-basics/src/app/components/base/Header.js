import React from 'react'

const Header = () => {
  return (
    <header className="bg-white w-full shadow py-3 px-3">
        <div className='flex justify-end'>
            <img src='./profile_images/user_20_male.png' className='w-10 h-10 rounded-full hover:opacity-50 cursor-pointer' /> 
        </div>
    </header>
  )
}

export default Header