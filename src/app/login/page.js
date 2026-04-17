import React from 'react'
import './page.css';
const Page = () => {
  return (
    <div className="grid">
      <div className="heading"><h1>Login</h1></div>
      <form>
        <label className="en" htmlFor="en"><h4>Enter either email or number</h4></label>
        <input id="en" placeholder="E.g. 2374878787 or xyz@gmail.com" />

        <label className="pas" htmlFor="pas"><h4>Enter the password</h4></label>
        <input id="pas" type="password" placeholder="Password" />
        <button className='btn'>Submit</button>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn" style={{ backgroundColor: "#fcfcfc", color: "black" }}>
            User
          </button>
          <button className="btn" style={{ backgroundColor: "#fcfcfc", color: "black" }}>Employee</button>
        </div>

      </form>
    </div>
  );
};


export default Page