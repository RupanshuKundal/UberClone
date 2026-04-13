import React from 'react'
import "../login/page.css"
const page = () => {
  return (
    <div className="grid">
        <div className="heading"><h1>Register</h1></div>
        <form>
         <label className="en" htmlFor="na"><h4>Enter the Name </h4></label>
        <input id="na" placeholder="Harry Poter" />
        <label className="en" htmlFor="en"><h4>Enter the email </h4></label>
        <input id="en" placeholder="E.g. zyz@gmail.com" />
        <label className="en" htmlFor="nu"><h4>Enter the number </h4></label>
        <input id="nu" placeholder="E.g. 2374878787 " />

        <label className="pas" htmlFor="pas"><h4>Enter the password</h4></label>
        <input id="pas" type="password" placeholder="Password" />
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default page