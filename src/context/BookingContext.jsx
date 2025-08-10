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

  const addOrUpdateBooking = useCallback((newBooking) => {
    setBookings(prevBookings => {
      const existingBookingIndex = prevBookings.findIndex(
        b => b.serviceId === newBooking.serviceId && b.type === newBooking.type
      );

      if (existingBookingIndex > -1) {
        const updatedBookings = [...prevBookings];
        const existingBooking = updatedBookings[existingBookingIndex];
        updatedBookings[existingBookingIndex] = { 
          ...existingBooking, 
          ...newBooking,
          messages: existingBooking.messages || [], // Preserve messages
        };
        return updatedBookings;
      } else {
        return [...prevBookings, { 
          id: Date.now(), 
          ...newBooking,
          messages: newBooking.messages || [], // Start with initial messages if provided
        }];
      }
    });
  }, []);

  const addMessageToBooking = useCallback((serviceId, message) => {
    setBookings(prevBookings => {
      return prevBookings.map(booking => {
        if (booking.serviceId === serviceId) {
          const updatedMessages = booking.messages ? [...booking.messages, message] : [message];
          return { ...booking, messages: updatedMessages };
        }
        return booking;
      });
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