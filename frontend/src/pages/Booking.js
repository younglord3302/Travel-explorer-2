import React, { useState, useEffect } from 'react';
import './Booking.css';

const Booking = () => {
  const [destinations, setDestinations] = useState([]);
  const [formData, setFormData] = useState({
    destination: '',
    userName: '',
    userEmail: '',
    travelDate: '',
    numberOfPeople: 1
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/destinations');
      const data = await response.json();
      setDestinations(data);
    } catch (error) {
      console.error('Error fetching destinations:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const selectedDestination = destinations.find(d => d._id === formData.destination);
      const totalPrice = selectedDestination ? selectedDestination.price * formData.numberOfPeople : 0;

      const bookingData = {
        ...formData,
        totalPrice
      };

      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
      });

      if (response.ok) {
        setMessage('Booking created successfully! Your adventure awaits.');
        setFormData({
          destination: '',
          userName: '',
          userEmail: '',
          travelDate: '',
          numberOfPeople: 1
        });
      } else {
        setMessage('Failed to create booking. Please check your details.');
      }
    } catch (error) {
      setMessage('Error creating booking. Please try again later.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking animate-fade-in-up">
      <div className="container">
        <h1 className="section-title">Book Your <span className="gradient-text">Adventure</span></h1>
        
        <div className="booking-layout">
          <div className="booking-info glass-panel">
            <h2>Ready to start?</h2>
            <p>Fill out the form to secure your spot in one of our hand-picked destinations. Our travel experts will handle the rest.</p>
            <ul className="info-list">
              <li><span>✓</span> Expert-curated itineraries</li>
              <li><span>✓</span> 24/7 dedicated support</li>
              <li><span>✓</span> Flexible cancellation policy</li>
            </ul>
            <div className="support-card glass-panel">
              <p>Need help? Contact us anytime.</p>
              <a href="mailto:support@travelexplorer.com">support@travelexplorer.com</a>
            </div>
          </div>

          <div className="booking-container glass-panel">
            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <label htmlFor="destination">Pick Your Destination</label>
                <select
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a destination</option>
                  {destinations.map(destination => (
                    <option key={destination._id} value={destination._id}>
                      {destination.name} - {destination.location}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="userName">Full Name</label>
                  <input
                    type="text"
                    id="userName"
                    name="userName"
                    placeholder="Enter your name"
                    value={formData.userName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="userEmail">Email Address</label>
                  <input
                    type="email"
                    id="userEmail"
                    name="userEmail"
                    placeholder="example@mail.com"
                    value={formData.userEmail}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="travelDate">When are you going?</label>
                  <input
                    type="date"
                    id="travelDate"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="numberOfPeople">Group Size</label>
                  <input
                    type="number"
                    id="numberOfPeople"
                    name="numberOfPeople"
                    value={formData.numberOfPeople}
                    onChange={handleChange}
                    min="1"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? (
                  <span className="loader-small"></span>
                ) : (
                  'Confirm Booking'
                )}
              </button>
            </form>

            {message && (
              <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
