import React from 'react'
import './page.css';
import CustomerForm from '../components/customerForm';

import EmployeeForm from '../components/employeeForm';
const Page = () => {
  return (
    <div className="grid">
      <div className="heading"><h1>Login</h1></div>
      {/* <CustomerForm></CustomerForm> */}
      <EmployeeForm></EmployeeForm>

      <br></br>
      <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn" style={{ backgroundColor: "#fcfcfc", color: "black" }}>
            User
          </button>
          <button className="btn" style={{ backgroundColor: "#fcfcfc", color: "black" }}>Employee</button>
        </div>
    </div>
  );
};


export default Page