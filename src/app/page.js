import React from 'react'

const page = () => {
  return (
    <>

      <form className="max-w-md p-6 bg-white shadow-lg rounded-2xl m-5 border border-amber-100">
        {/* Start Position Input Group */}
        <div className="flex flex-col mb-6">
          <label htmlFor="start" className="text-sm font-semibold text-amber-900 mb-2 ml-1">
            Starting Point
          </label>
          <input
            type="text"
            id="start"
            placeholder="e.g. New York"
            className="bg-amber-50 border-2 border-amber-200 rounded-xl p-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all"
          />
        </div>

        {/* Destination Input Group */}
        <div className="flex flex-col mb-6"> 
          <label htmlFor="dest" className="text-sm font-semibold text-amber-900 mb-2 ml-1">
            Destination
          </label>
          <input
            type="text"
            id="dest"
            placeholder="e.g. Los Angeles"
            className="bg-amber-50 border-2 border-amber-200 rounded-xl p-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all"
          />
        </div>

        {/* Submit Button */}
        <button className="w-full bg-amber-600 text-white font-bold py-3 rounded-xl shadow-md hover:bg-amber-700 hover:shadow-lg active:scale-95 transition-all">
          Plan Route
        </button>
      </form>

    </>
  )
}

export default page