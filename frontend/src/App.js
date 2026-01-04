import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Booking from './pages/Booking';
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route 
              path="/booking" 
              element={
                <>
                  <SignedIn>
                    <Booking />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              } 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
