import React from 'react'

export const GlobalFilter = ({filter,setFilter}) => {
  return (
  <div className="container">
    <span className='inputs'>
      {/* search:{''} */}
      <input value={filter||''}
      onChange={e=>setFilter(e.target.value)}placeholder='search mobile number'pattern='^[\d]{10,12}$'/>
    </span>
    <div className='sub_container'>
      <div className="common fromDate">
        <label for="fdate">From Date</label>
        <input type="date"placeholder='From Date'id='fdate'/>
      </div>
      <div className="common toDate">
        <label for="tdate">To Date</label>
        <input type="date"placeholder='To Date'id='tdate'/>
      </div>
      <button className='btn'>Apply Dates</button>
    </div>
  </div>
  )
}
