import React from 'react'
import { Link, withRouter } from 'react-router-dom'


const Navbar = () => {
  return (


    <div className="navbar">
      <Link to='/' className="link">Home</Link>
      <Link to='/events' className="link">Events</Link>
      <Link to='/events/new' className="link">New Event</Link>
      <Link to='/login' className="link">Login</Link>
      <Link to='/register' className="link">Register</Link>
      <Link to='/profile' className="link">Profile</Link>
    </div>

  )
}



export default withRouter(Navbar)