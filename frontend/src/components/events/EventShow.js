import React from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { getSingleEvent , getAllEvents , deleteEvent } from '../../lib/api'
import useFetch from '../../utils/useFetch'
import EventCard from './EventCard'


function EventShow() {
  const { id: eventId } = useParams()
  const { data: event } = useFetch(getSingleEvent, eventId)
  const { data: events } = useFetch(getAllEvents)
  const history = useHistory()

  const handleDelete = async () => {
    try {
      await deleteEvent(eventId)
      history.push('/events')
    } catch (err) {
      history.push('/notfound')
    }
  }

  const filterOrigin = () => {
    if (!events) return null
    const regexp = new RegExp(event.origin, 'i')
    let filtered = events.filter(event => (
      (regexp.test(event.origin))))
    filtered = [filtered[0],filtered[1],filtered[2]]
    return filtered
  }


  const addToBasket = e => {
    console.log(e.target.value)
  }

  const addToWishlist = e => {
    console.log(e.target.value)
  }
  
  if (!event || !events) return null

  return (
    <div className="body">
      <div className="container">

        <div className="title-container">
          
          <div className="title-image">
            <img src={event.image} alt={event.name} loading="lazy" width="500" className="image"/>
          </div>
          <div className="title-wording">
            <div className="title">{event.name}</div>
            <div className="host">Hosted by: Captain Jack</div>
            <div className="location">Location: Tortuga</div>
            <div className="price">Price: £50</div>
            <div className="owner-buttons">
              <Link to={`/events/${eventId}/edit`} className="link"><button>Edit</button></Link>
              <button onClick={handleDelete}>Delete event</button>
            </div>
          </div>
        </div>
        <div className="interest-buttons">
          <button onClick={addToWishlist} value="Wishlist" >Add to wish list</button>
          <button onClick={addToBasket} value="Basket" >Add to basket</button>
        </div>
        <div className="description">
          <div className="title-wording">
            <strong>About this event:</strong><br></br>
            {event.tastingNotes}
          </div>
        </div>
        <div className="tags">
          <strong>Tags:</strong><br></br>
        </div>
        <div className="similar-events">
          <strong>Similar Events:</strong><br></br>
          <div className="similar-events-cards">

            {filterOrigin().map(event => 
            // <div key={event._id} >{event.name}</div>
              <EventCard key={event.id} className="card" {...event} />
            )}
          </div>
        </div>
        <div className="recently-viewed">
          <strong>Recently viewed:</strong><br></br>
        </div>
      </div>
    </div>

  )
}

export default EventShow
