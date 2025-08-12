import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const BookingContext = createContext(null);

export const useBookings = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBookings must be used within a BookingProvider');
  }
  return context;
};

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState(() => {
    try {
      const savedBookings = localStorage.getItem('userBookings');
      return savedBookings ? JSON.parse(savedBookings) : [];
    } catch (error) {
      console.error("Failed to parse bookings from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('userBookings', JSON.stringify(bookings));
  }, [bookings]);

  const addOrUpdateBooking = useCallback((bookingUpdate) => {
    setBookings(prevBookings => {
      const index = prevBookings.findIndex(b => b.serviceId === bookingUpdate.serviceId);

      if (index > -1) {
        // Update existing booking
        const updatedBookings = [...prevBookings];
        const existingBooking = updatedBookings[index];
        updatedBookings[index] = { 
          ...existingBooking, 
          ...bookingUpdate,
          // Ensure messages are merged, not overwritten, if the update doesn't include them
          messages: bookingUpdate.messages || existingBooking.messages || [],
        };
        return updatedBookings;
      } else {
        // Add new booking
        return [...prevBookings, { 
          id: Date.now(), 
          ...bookingUpdate,
          messages: bookingUpdate.messages || [],
        }];
      }
    });
  }, []);

  const addMessageToBooking = useCallback((serviceId, message, isInitialMessage = false) => {
    setBookings(prevBookings => {
      const index = prevBookings.findIndex(b => b.serviceId === serviceId);
      if (index === -1) return prevBookings; // Should not happen if booking is created first

      const updatedBookings = [...prevBookings];
      const booking = updatedBookings[index];
      
      const newMessages = isInitialMessage 
        ? [message, ...(booking.messages || [])] 
        : [...(booking.messages || []), message];

      updatedBookings[index] = { ...booking, messages: newMessages };
      return updatedBookings;
    });
  }, []);


  const value = {
    bookings,
    addOrUpdateBooking,
    addMessageToBooking,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};