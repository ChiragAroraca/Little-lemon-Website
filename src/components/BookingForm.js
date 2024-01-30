import React, { useState } from "react";

const BookingForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occassion, setOccassion] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.SubmitForm(e);
  }

  const handleChange = (e) => {
    setDate(e);
    props.dispatch();
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <fieldset>
          <div className="form-details">
            <div className="hotel-details">
              <h2>Table details</h2>
              <div>
                <label htmlFor="book-date">Choose Date</label>
                <input
                  id="book-date"
                  value={date}
                  onChange={(e) => handleChange(e.target.value)}
                  type="date"
                  required
                ></input>
              </div>

              <div>
                <label htmlFor="book-time">Choose Time:</label>
                <select
                  id="book-time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                >
                  <option value="">Select a Time</option>
                  {props.availableTimes.availableTimes.map((availableTime) => {
                    return <option key={availableTime}>{availableTime}</option>;
                  })}
                </select>
              </div>

              <div>
                <label htmlFor="book-guests">Number of guests:</label>
                <input
                  id="book-guests"
                  value={guests}
                  placeholder="Number of Guests"
                  pattern="[1-9]"
                  required
                  onChange={(e) => setGuests(e.target.value)}
                ></input>
              </div>
              <div>
                <label htmlFor="book-occassion">Occassion:</label>
                <select
                  id="book-occassion"
                  key={occassion}
                  value={occassion}
                  onChange={(e) => setOccassion(e.target.value)}
                >
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Office parties</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="personal-details">
              <div>
                <h2>Personal Details</h2>
                <label htmlFor="first-name">First Name:</label>
                <input
                  id="first-name"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="last-name">Last Name:</label>
                <input
                  id="last-name"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="email">E-mail:</label>
                <input
                  id="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="number">Phone number:</label>
                <input
                  id="number"
                  placeholder="Phone number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  type="text"
                  required
                ></input>
              </div>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Confirm Booking
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default BookingForm;
