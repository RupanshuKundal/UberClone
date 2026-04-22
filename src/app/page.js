"use client"
import React from 'react'

import { useState } from 'react';

const RequestRideForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    pickup: '',
    drop: '',
    date: '',
    mobile: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, pickup, drop, date, mobile } = formData;
    if (!name || !pickup || !drop || !date || !mobile) {
      alert('Please fill in all fields');
      return;
    }
    if (!/^\d{10}$/.test(mobile)) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }

    console.log('Ride request:', formData)
    setFormData({ name: '', pickup: '', drop: '', date: '', mobile: '' });
  };
  return (
    <>

      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full p-6 bg-white shadow-lg rounded-2xl m-5 border border-purple-100"
      >
        <h2 className="text-2xl font-bold text-purple-900 text-center mb-6">
          Book a Ride
        </h2>
        <div className="flex flex-col mb-5">
          <label htmlFor="name" className="text-sm font-semibold text-purple-800 mb-2 ml-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Harry Potter"
            className="bg-fuchsia-50 border-2 border-purple-200 rounded-xl p-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-fuchsia-200 transition-all"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="pickup" className="text-sm font-semibold text-purple-800 mb-2 ml-1">
            Pickup Location
          </label>
          <input
            type="text"
            id="pickup"
            value={formData.pickup}
            onChange={handleChange}
            placeholder="e.g. New York"
            className="bg-fuchsia-50 border-2 border-purple-200 rounded-xl p-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-fuchsia-200 transition-all"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="drop" className="text-sm font-semibold text-purple-800 mb-2 ml-1">
            Drop Location
          </label>
          <input
            type="text"
            id="drop"
            value={formData.drop}
            onChange={handleChange}
            placeholder="e.g. Los Angeles"
            className="bg-fuchsia-50 border-2 border-purple-200 rounded-xl p-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-fuchsia-200 transition-all"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="date" className="text-sm font-semibold text-purple-800 mb-2 ml-1">
            Date of Booking
          </label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            className="bg-fuchsia-50 border-2 border-purple-200 rounded-xl p-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-fuchsia-200 transition-all"
          />
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="mobile" className="text-sm font-semibold text-purple-800 mb-2 ml-1">
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="e.g. 9876543210"
            maxLength={10}
            className="bg-fuchsia-50 border-2 border-purple-200 rounded-xl p-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-fuchsia-200 transition-all"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white font-bold py-3 rounded-xl shadow-md hover:bg-pink-600 hover:shadow-lg active:scale-95 transition-all"
        >
          Request Ride
        </button>


      </form>

    </>
  )
}

export default RequestRideForm;