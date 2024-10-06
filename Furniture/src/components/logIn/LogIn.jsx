import React from 'react'
import "./LogIn.scss"
import {useNavigate } from 'react-router-dom'
import {FcGoogle} from "react-icons/fc"
import {FaFacebook,FaXTwitter} from "react-icons/fa6"

function LogIn() {
  const navigate=useNavigate()
  const submit=()=>{
    navigate('/')
  }
  return (
    <div className='Login'>
      <form className='LoginForm' >
        <h1>Welcome to Furniture</h1>
        <input type="text" placeholder=' Enter the Email'/>
        <input type="password" placeholder=' Enter the Password'/>
        <h2>Forget Your Password ?</h2>
        <button className='SignIn' onClick={submit} type='submit'>Log In</button>
        <span>OR</span>
        <button className='SignG'><h3><FcGoogle /></h3>Continue With Google </button>
        <button className='SignF'><h3><FaFacebook /></h3>Continue With FaceBook </button>
        <button className='SignT'><h3><FaXTwitter /></h3>Continue With X </button>
        <span>Don't have the Account ? <a href='#'>Click Here</a></span>
        <p>By continuing, you agree to Online Shop Terms of Service an acknowledge you've read our Privacy Policy. Notice at collection.</p>
      </form>
    </div>
  )
}

export default LogIn

