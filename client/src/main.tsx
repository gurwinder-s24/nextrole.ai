import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Toaster } from 'react-hot-toast';
import {AppProvider} from "./context/AppContext.tsx";
import { GoogleOAuthProvider } from '@react-oauth/google';

export const server = import.meta.env.VITE_SERVER_URL || "http://localhost:5000";
export const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID!}>
      <AppProvider>
        <App />
        <Toaster />
      </AppProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
