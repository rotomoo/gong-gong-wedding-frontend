import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import PlannerSearchPage from './pages/PlannerSearchPage';
import RequestFormPage from './pages/RequestFormPage';
import RequestListPage from './pages/RequestListPage';
import ServiceRegisterPage from './pages/ServiceRegisterPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import MyPage from './pages/MyPage';
import BookingListPage from './pages/BookingListPage';
import LikedServicesPage from './pages/LikedServicesPage';
import RequestHistoryPage from './pages/RequestHistoryPage';
import RequestDetailPage from './pages/RequestDetailPage';
import CommunityPage from './pages/CommunityPage';
import CommunityDetailPage from './pages/CommunityDetailPage';
import CommunityWritePage from './pages/CommunityWritePage';
import ReviewFormPage from './pages/ReviewFormPage';
import ConsultationChatPage from './pages/ConsultationChatPage';
import { BookingProvider } from './context/BookingContext';
import { NotificationProvider } from './context/NotificationContext';
import PolicyInfoPage from './pages/PolicyInfoPage';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <Router>
      <NotificationProvider>
        <BookingProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<MainPage />} />
              <Route path="search" element={<PlannerSearchPage />} />
              <Route path="request-form" element={<RequestFormPage />} />
              <Route path="requests" element={<RequestListPage />} />
              <Route path="service-register" element={<ServiceRegisterPage />} />
              <Route path="/service/:id" element={<ServiceDetailPage />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/bookings" element={<BookingListPage />} />
              <Route path="/liked-services" element={<LikedServicesPage />} />
              <Route path="/request-history" element={<RequestHistoryPage />} />
              <Route path="/request/:id" element={<RequestDetailPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/community/:id" element={<CommunityDetailPage />} />
              <Route path="/community/write" element={<CommunityWritePage />} />
              <Route path="/service/:id/review" element={<ReviewFormPage />} />
              <Route path="/consultation/:requestId/:proposalId" element={<ConsultationChatPage />} />
              <Route path="/policy-info" element={<PolicyInfoPage />} />
            </Route>
          </Routes>
        </BookingProvider>
      </NotificationProvider>
    </Router>
  );
}

export default App;
