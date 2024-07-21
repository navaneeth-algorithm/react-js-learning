
import React from 'react'

const RegisterForm = () => {
  return (
    <form className='form'>
        <div>
            <span className='text-lg font-bold'>Registration Form</span>
        </div>
        <div>
            <input type="text" placeholder="Username" />
        </div>

        <div>
            <input type="email" placeholder="Email" />
        </div>

        <div>
            <input type="password" placeholder="Password" />
        </div>
        
        <button>Register</button>
    </form>
  )
}

export default RegisterForm