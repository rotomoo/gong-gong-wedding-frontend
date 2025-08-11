import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';
import { mockRequests, mockReceivedProposals } from '../data/mockData';

// This should be replaced with a real authentication check
const CURRENT_USER_ID = 'user123';

const NotificationContext = createContext();

export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [proposals, setProposals] = useState(mockReceivedProposals);

  const myRequestIds = useMemo(() => 
    mockRequests
      .filter(req => req.authorId === CURRENT_USER_ID)
      .map(req => req.id)
  , []);

  const unreadProposalsCount = useMemo(() => 
    proposals.filter(p => myRequestIds.includes(p.requestId) && !p.read).length
  , [proposals, myRequestIds]);

  const markProposalAsRead = useCallback((proposalId) => {
    setProposals(prev => 
      prev.map(p => p.id === proposalId ? { ...p, read: true } : p)
    );
  }, []);

  const hasUnreadProposals = useCallback((requestId) => {
    return proposals.some(p => p.requestId === requestId && !p.read);
  }, [proposals]);

  const value = {
    unreadProposalsCount,
    markProposalAsRead,
    hasUnreadProposals,
    proposals, // RequestDetailPage에서 사용하기 위해 전체 제안 목록도 제공
    myRequestIds,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};