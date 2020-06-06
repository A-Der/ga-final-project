import React from 'react'
import { getAllEvents } from '../../lib/api'
import useFetch from '../../utils/useFetch'
import { Redirect } from 'react-router-dom'

import EventCard from './EventCard'


function EventIndex() {
  const { data: events, error } = useFetch(getAllEvents)
 

  const handleSearch = e => {
    const searchVal = e.target.value
    console.log(searchVal)
    // setIndexData(...indexData, searchVal)
  }


  if (error) {
    return <Redirect to="/notfound" />
  }
  
  if (!events) return null
  return (
    <div className="body-index">
      <div className="filter-container">
        <div className="filters">
          <input className="input" type="text" onChange={handleSearch} placeholder="Search..." />

          <div className="filter-item">Filter item 1</div>
          <div className="filter-item">Filter item 2</div>
          <div className="filter-item">Filter item 3</div>
          <div className="filter-item">Filter item 4</div>
          <div className="filter-item">Filter item 5</div>
          <div className="filter-item">Filter item 6</div>
          <div className="filter-item">Filter item 7</div>
          <div className="filter-item">Filter item 8</div>
          <div className="filter-item">Filter item 9</div>
          <div className="filter-item">Filter item 10</div>
          <div className="filter-item">Filter item 11</div>
          <div className="filter-item">Filter item 12</div>
          <div className="filter-item">Filter item 13</div>
          <div className="filter-item">Filter item 14</div>
        </div>
      </div>
      <div className="container-index">
        {events.map(event => (
          <EventCard key={event._id} {...event} />
        ))
        }
      </div>
    </div>
  )
}

export default EventIndex