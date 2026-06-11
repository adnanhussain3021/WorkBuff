import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';
import AuthContext from './context/authContext.jsx';
import { ThemeProvider } from './context/themeContext.jsx';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY || PUBLISHABLE_KEY === 'your_clerk_publishable_key' || PUBLISHABLE_KEY.includes('pk_test_your')) {
  createRoot(document.getElementById('root')).render(
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Configuration Required</h1>
      <p>Missing or invalid <code>VITE_CLERK_PUBLISHABLE_KEY</code>. Please configure it in the application's environment variables/secrets.</p>
    </div>
  );
} else if (PUBLISHABLE_KEY.startsWith('sk_')) {
  createRoot(document.getElementById('root')).render(
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Invalid Configuration</h1>
      <p>You provided a Clerk <strong>Secret Key</strong> for the Publishable Key. Please provide the Publishable Key (starts with <code>pk_test_</code> or <code>pk_live_</code>).</p>
    </div>
  );
} else {
  createRoot(document.getElementById('root')).render(
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <ThemeProvider>
        <AuthContext>
          <App />
        </AuthContext>
      </ThemeProvider>
    </ClerkProvider>
  );
}
