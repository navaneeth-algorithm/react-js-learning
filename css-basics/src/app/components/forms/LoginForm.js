import React from 'react'

const LoginForm = () => {
    return (
        <form className='form'>
            <div>
                <span className='text-lg font-bold'>Login Form</span>
            </div>
            <div>
                <input type="email" placeholder="Email" />
            </div>
    
            <div>
                <input type="password" placeholder="Password" />
            </div>
            
            <button>Login</button>
        </form>
      )
}

export default LoginForm