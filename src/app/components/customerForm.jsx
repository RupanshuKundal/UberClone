import React from 'react'

const CustomerForm = () => {
  return (
    <div>
        <form>
        <label className="en" htmlFor="en"><h4>Enter either email or number</h4></label>
        <input id="en" placeholder="E.g. 2374878787 or xyz@gmail.com" />

        <label className="pas" htmlFor="pas"><h4>Enter the password</h4></label>
        <input id="pas" type="password" placeholder="Password" />
        <button className='btn'>Submit</button>
        

      </form>
    </div>
  )
}

export default CustomerForm