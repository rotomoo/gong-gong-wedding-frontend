import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BookingProvider } from './context/BookingContext';
import { NotificationProvider } from './context/NotificationContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookingProvider>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </BookingProvider>
  </StrictMode>,
);