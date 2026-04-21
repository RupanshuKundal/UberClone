"use client";
import React from 'react'
import { useState } from 'react';

const CustomerForm = () => {
  const [emailOrNumber, setEmailOrNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailOrNumber.trim() || !password.trim()) {
      alert('Please fill in both fields');
      return;
    }

    const formData = {
      emailOrNumber: emailOrNumber.trim(),
      password: password,
    };
    console.log('Customer login data:', formData);
    setEmailOrNumber('');
    setPassword('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="en" htmlFor="en"><h4>Enter either email or number</h4></label>
        <input
          id="en"
          placeholder="E.g. 2374878787 or xyz@gmail.com"
          value={emailOrNumber}
          onChange={(e) => setEmailOrNumber(e.target.value)}
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

export default CustomerForm;