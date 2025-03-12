import React, { useState } from 'react'

const AuthForm = () => {
    const [isLogin, setLogin] = useState(true)
    const [show, setShow] = useState(false)      //for password showhidepassword
    const [data, setData] = useState(undefined)

    const options = [
        "Admin",
        "Supervisor",
        "Manager",
        "Production",
        "Quality",
        "Store",
    ];

  return (
    <div className='container'>
        <div className='welcome'>
        <h1>PG Production report!</h1>
        </div>
        <div className='form-container'>
            <div className='form-toggle'>
                <button className={isLogin ? 'active' : ""} onClick={()=>setLogin(true)}>Login</button>
                <button className={!isLogin ? 'active' : ""} onClick={()=>setLogin(false)}>Signup</button>
            </div>
            {isLogin ? <>
            <div className='form'>
                <h2>Login Form</h2>
                <input type='email' placeholder='Email'></input>
                <input type='Password' placeholder='Password'></input>
                <a href='#'>Forget Password?</a>
                <button>Login</button>
                <p>Not a Member ? <a href='#' onClick={()=>setLogin(false)}>Signup now</a></p>
            </div>
            </> : <>
            <div className='form'>
                <h2>{data} Signup Form</h2>
                <div className='select-box'>
                    <select onClick={(e)=>setData(e.target.value)}>
                    <option>Please choose one</option>
                    {options.map((option, index)=>{
                        return (
                            <option key={index}>
                                {option}
                            </option>
                        )
                    })}
                </select>
                </div>
                <input type='text' placeholder='Name'></input>
                <input type='email' placeholder='Email'></input>
                <div>
                <input type={show ? 'text' : 'password'} placeholder='Password' ></input>
                <input type={show ? 'text' : 'password'} placeholder='confirm Password' ></input>
                <button onClick={()=>setShow(!show)}>{show ? "Hide" : 'Show'}</button>
                </div>
              
                
                <button>Submit <a href=''></a></button>
            </div>
            </>}
        </div>
    </div>
  )
}

export default AuthForm