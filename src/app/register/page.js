"use client"
import React from 'react'
import "../login/page.css"
const page = () => {

  async function register(e){
    e.preventDefault()
    let form = e.target
    let name = form.name.value
    let email = form.email.value
    let phone = form.phone.value
    let password = form.password.value
    
    await fetch('/api/registerUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password
      })
    })
    form.reset()
    alert("User Registered Successfully")
    



  }


  return (
    <div className="grid">
        <div className="heading"><h1>Register</h1></div>
        <form onSubmit={register}>
         <label className="en" htmlFor="na"><h4>Enter the Name </h4></label>
        <input id="na" placeholder="Harry Poter" name='name' />
        <label className="en" htmlFor="en"><h4>Enter the email </h4></label>
        <input id="en" placeholder="E.g. zyz@gmail.com" name='email' />
        <label className="en" htmlFor="nu"><h4>Enter the number </h4></label>
        <input id="nu" placeholder="E.g. 2374878787" name='phone' />

        <label className="pas" htmlFor="pas"><h4>Enter the password</h4></label>
        <input id="pas" type="password" placeholder="Password" name='password'/>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default page 