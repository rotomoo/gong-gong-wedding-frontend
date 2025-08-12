import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';
import { mockRequests as initialRequests } from '../data/mockData';

const CURRENT_USER_ID = 'user123';

const NotificationContext = createContext();

export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [requests, setRequests] = useState(initialRequests);

  // Get requests authored by the current user
  const myRequests = useMemo(() => 
    requests.filter(req => req.authorId === CURRENT_USER_ID)
  , [requests]);

  // Calculate the total number of unread messages across all proposals for the user
  const totalUnreadCount = useMemo(() => {
    return myRequests.reduce((total, req) => {
      const unreadInRequest = req.proposals?.reduce((reqTotal, p) => reqTotal + (p.newMessagesCount || 0), 0) || 0;
      return total + unreadInRequest;
    }, 0);
  }, [myRequests]);

  // Mark a specific proposal's messages as read
  const markNotificationAsRead = useCallback((requestId, proposalId) => {
    setRequests(prevRequests =>
      prevRequests.map(req => {
        if (req.id === requestId && req.proposals) {
          return {
            ...req,
            proposals: req.proposals.map(p => 
              p.id === proposalId ? { ...p, newMessagesCount: 0, read: true } : p
            ),
          };
        }
        return req;
      })
    );
  }, []);
  
  // Get a specific request by its ID
  const getRequestById = useCallback((requestId) => {
    return requests.find(req => req.id === parseInt(requestId));
  }, [requests]);

  const value = {
    myRequests,
    totalUnreadCount,
    markNotificationAsRead,
    getRequestById,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
