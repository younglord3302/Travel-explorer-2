import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/clerk-react';

const Header = () => {
  return (
    <header className="header glass-panel">
      <div className="header-container container">
        <Link to="/" className="logo">
          <h1 className="gradient-text">Travel Explorer</h1>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/destinations" className="nav-link">Destinations</Link>
          <Link to="/booking" className="nav-link">Book Now</Link>
          
          <div className="auth-wrapper">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="nav-link-btn sign-in-btn">Sign In</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
