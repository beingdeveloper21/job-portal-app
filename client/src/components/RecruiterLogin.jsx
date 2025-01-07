import React, { useContext } from 'react'
import { useState,useEffect } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const RecruiterLogin = () => {
    const {setShowRecruiterLogin}=useContext(AppContext)
    const [state,setState]=useState('Login')
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')

    const [image,setImage]=useState(false)
    const [isTextDataSubmitted,setIsTextDataSubmitted]=useState(false)
    const onSubmitHandler=async(e)=>{
        e.preventDefault()
        if(state === 'Sign Up' && !isTextDataSubmitted){
            setIsTextDataSubmitted(true)
        }
    }
    useEffect(()=>{
        document.body.style.overflow='hidden'
        return ()=>{
            document.body.style.overflow='unset'
        }
    },[])
  return (
    <div className='absolute top-0 left-0 bottom-0 right-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'> 
      <form onSubmit={onSubmitHandler} className='relative bg-white rounded-xl p-10 text-slate-500' >
        <h1 className='text-center text-2xl font-medium text-neutral-700'>Recruiter {state}</h1>
        <p className='text-sm'>Welcome back! Please sign in to continue</p>
        {state === 'Sign Up' && isTextDataSubmitted ? <>
        <div className='flex items-center gap-4 my-10 '>
            <label htmlFor="image">
                <img className='w-16 rounded-full' src={image ? URL.createObjectURL(image):assets.upload_area} alt="" />
                <input onChange={e=>setImage(e.target.files[0])} type="file" id="image" hidden />
            </label>
            <p>Upload Comapny <br/> logo</p>
        </div>
        </>:
         <>
         { state !== 'Login' &&(
              <div className='border flex items-center rounded-full px-4 py-2 mt-5 gap-2'>
              <img src={assets.person_icon} alt="" />
              <input className='outline-none text-sm' onChange={e=>setName(e.target.value)} value={name} type="text" placeholder="Company Name" required />
          </div>
 
         )}
        
         <div className='border flex items-center rounded-full px-4 py-2 mt-5 gap-2'>
             <img src={assets.email_icon} alt="" />
             <input className='outline-none text-sm' onChange={e=>setEmail(e.target.value)} value={email} type="email" placeholder="Email-Id" required />
         </div>
         <div className='border flex items-center rounded-full px-4 py-2 mt-5 gap-2'>
         <img src={assets.lock_icon} alt="" />
             <input className='outline-none text-sm' onChange={e=>setPassword(e.target.value)} value={password} type="password" placeholder="Password" required />
         </div>

         
         </>
        }
         {state==='Login' &&   <p className='text-sm cursor-pointer text-blue-600 my-4 mt-4 '>Forgot password?</p>}      
       
        <button type="submit" className='bg-blue-600 w-full text-white py-2 rounded-full mt-4'> {state === 'Login'? 'login': isTextDataSubmitted? 'create account' : 'next'}</button>
        { state==='Login'?
         <p className='text-center mt-5'>Don't have an account? <span   className='text-blue-600 cursor-pointer'  onClick={()=>setState('Sign Up')}>Sign Up</span></p>:
         <p className='text-center mt-5'>Already have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Login')}>Login</span></p>
    }
       <img onClick={e=>setShowRecruiterLogin(false)} className='absolute top-5 right-5 cursor-pointer' src={assets.cross_icon} alt="" />
        
      </form>
    </div>
  )
}

export default RecruiterLogin
