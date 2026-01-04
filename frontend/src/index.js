import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ClerkProvider } from '@clerk/clerk-react';

// Import your publishable key
const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const root = ReactDOM.createRoot(document.getElementById('root'));

// Validation: Check if key is missing or looks like a duplicate (common Vercel error)
const isKeyMissing = !PUBLISHABLE_KEY;
const isKeyDuplicated = PUBLISHABLE_KEY && (PUBLISHABLE_KEY.includes('pk_test_') && PUBLISHABLE_KEY.indexOf('pk_test_', 10) > -1);
const isKeyMalformed = PUBLISHABLE_KEY && !PUBLISHABLE_KEY.startsWith('pk_');

if (isKeyMissing || isKeyDuplicated || isKeyMalformed) {
  root.render(
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      color: '#ef4444', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '2rem',
      textAlign: 'center',
      backgroundColor: '#fef2f2'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Configuration Error</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
        {isKeyMissing ? 'Missing ' : 'Invalid '} 
        <code>REACT_APP_CLERK_PUBLISHABLE_KEY</code>
      </p>
      {isKeyDuplicated && (
        <p style={{ color: '#b91c1c', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Duplicate key detected! You might have pasted it twice.
        </p>
      )}
      <p style={{ color: '#374151' }}>Please check your <code>frontend/.env</code> file.</p>
    </div>
  );
} else {
  root.render(
    <React.StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App />
      </ClerkProvider>
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
