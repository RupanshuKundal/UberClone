"use client";
import React from 'react'

import { useState } from 'react';

const EmployeeForm = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!employeeId.trim() || !password.trim()) {
      alert('Please fill in both fields');
      return;
    }

    const formData = {
      employeeId: employeeId.trim(),
      password: password,
    };

    console.log('Employee login data:', formData);
   setEmployeeId('');
    setPassword('');
  };
  return (
   <div>
      <form onSubmit={handleSubmit}>
        <label className="eid" htmlFor="eid"><h4>Enter the Employee ID</h4></label>
        <input
          id="eid"
          placeholder="E.g. EMP1024"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />

        <label className="pas" htmlFor="pas"><h4>Enter the password</h4></label>
        <input
          id="pas"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  )
}

export default EmployeeForm