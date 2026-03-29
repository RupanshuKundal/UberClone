import React from 'react'

const page = () => {
  return (
    <>

      <form action="">
        <div className="start bg-amber-300 ">
          <label htmlFor="start" >Enter the Start Position </label>
          <input type="text" id="start" placeholder="Starting Point" className="bg-amber-100 border-amber-400"></input>
        </div>

        <br></br>
        <div className="end">
          <label htmlFor="dest">Enter the Destination</label>
          <input type="text" id="dest" placeholder="Destination"></input>
        </div>
        <div className="map"></div>

      </form>


    </>
  )
}

export default page