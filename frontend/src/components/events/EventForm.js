import React from 'react'
import { locationOptions } from '../../lib/IndexSearchOptions'

function EventForm({ data, handleChange, handleSubmit, errors, submitText }) {
  console.log(locationOptions)
  return (
    <div className="event-form">
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <input
            name="name"
            label="Name"
            placeholder="Event Name"
            onChange={handleChange}
            value={data.name}
            error={errors.name}
          />
        </div>


        <div className="form-item">
          <select
            name="location"
            label="location"
            placeholder="Location"
            onChange={handleChange}
            value={data.location}
            error={errors.location}
            defaultValue="DEFAULT"
          >
            <option value="DEFAULT" disabled>Location</option>
            {locationOptions.map(location => {
              return <option key={location.label} value={location.label}>{location.label}</option>
            })}
          </select>
        </div>
        {/* 
        <div className="form-item">
          <input
            name="location"
            label="Location"
            placeholder="Location"
            onChange={handleChange}
            value={data.location}
            error={errors.location}
          />
        </div> */}

        <div className="form-item">
          <input
            name="price"
            label="Price"
            placeholder="Price"
            onChange={handleChange}
            value={data.price}
            error={errors.price}
          />
        </div>

        <div className="form-item">
          <input
            type="datetime-local"
            name="date_time"
            label="date_time"
            placeholder="Date time"
            onChange={handleChange}
            value={data.date_time}
            error={errors.date_time}
          />
        </div>

        <div className="form-item">
          <textarea
            name="about"
            label="About"
            placeholder="About"
            onChange={handleChange}
            value={data.about}
            error={errors.about}
          />
        </div>

        {/* <div className="form-item">
          <input
            name="talk_images"
            label="talk_images"
            placeholder="Image"
            onChange={handleChange}
            value={data.talk_images}
            error={errors.talk_images}
          />
        </div> */}






        <button buttontext={submitText}>{submitText}</button>
      </form>
    </div>
  )
}

export default EventForm