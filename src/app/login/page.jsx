"use client";
import React from 'react'
import './page.css';
import { useState } from 'react';
import EmployeeForm from '../components/employeeForm';
import CustomerForm from '../components/customerForm'; 
const Page = () => {
  const [role, setRole] = useState(null);
  const inactiveStyle = {
    backgroundColor: "#fdf4ff",
    color: "#6b21a8",
    border: "2px solid #e9d5ff",
  };
   const activeStyle = {
    backgroundColor: "#9333ea",
    color: "#ffffff",
    border: "2px solid #9333ea",
  };
  return (
    <div className="grid">
  <div className="heading"><h1>Login</h1></div>
 
  <div style={{ display: 'flex', gap: '10px', width: '100%', maxWidth: '400px' }}>
        <button
          className="btn"
          style={role === 'user' ? activeStyle : inactiveStyle}
          onClick={() => setRole('user')}
        >
          User
        </button>
        <button
          className="btn"
          style={role === 'employee' ? activeStyle : inactiveStyle}
          onClick={() => setRole('employee')}
        >
          Employee
        </button>
       
      </div>
       <br />

      {/* Form renders AFTER buttons, based on selection */}
      {role === 'user' && <CustomerForm />}
      {role === 'employee' && <EmployeeForm />}

      {/* Optional prompt when nothing is selected */}
      {role === null && (
        <p style={{ color: '#6b21a8', marginTop: '10px' }}>
          Please select a role to continue
        </p>
      )}

</div>
  );
};


export default Page