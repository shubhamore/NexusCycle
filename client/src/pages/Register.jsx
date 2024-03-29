import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Register() {
  const [user, setUser] = useState({ email: "", password: "" })
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const userRegister = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    const data = await response.json()
    if (response.status === 400) {
      if (data === "username already exists") {
        toast.error("username already exists")
      } else if (data === "email already exists") {
        toast.error("email already exists")
      }
    } else {
      console.log(data)
      toast.success("register successful")
      navigate('/login')
    }
    setIsLoading(false)
  }

  return (<>
    {/* <div>Register</div> */}
    <div className="gradiant-3"></div>
    {!isLoading ?
      (
        <>
          <form onSubmit={userRegister} className='flex flex-col w-[300px] max-w-full px-[25px] py-[15px] border-2 border-slate-50 rounded-lg '>
            <input className='bg-transparent px-3 py-2 focus:outline-0 my-3 border-b-2 border-gray-200' type="email" placeholder="email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
            <input className='bg-transparent px-3 py-2 focus:outline-0 my-3 border-b-2 border-gray-200' type="password" placeholder="password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
            <br />
            <button className='w-full bg-slate-600 py-2 rounded-sm' type="submit">Register</button>
          </form>
          <h1 className='my-5'>Already have an account?<span className='text-gray-300'>
            <Link to="/login">Login</Link></span></h1>
        </>
      ) :
      (
        <h1 className='text-3xl text-center'>Loading...</h1>
      )}

  </>
  )
}
