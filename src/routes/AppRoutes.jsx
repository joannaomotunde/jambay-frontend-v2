import { BrowserRouter, Routes, Route } from "react-router-dom";

// AUTH
import Onboarding from "../pages/auth/Onboarding";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import VerifyOTP from "../pages/auth/VerifyOTP";
import AccessDenied403 from "../pages/auth/AccessDenied403";

// LAYOUT WRAPPER
import Layout from "../components/Layout/layout";

// USER
import Dashboard from "../pages/user/Dashboard";
import EventsBrowse from "../pages/user/EventsBrowse";
import EventDetails from "../pages/user/EventDetails";
import SeatBooking from "../pages/user/SeatBooking";
import SeatMap from "../pages/user/SeatMap";
import TicketDetail from "../pages/user/TicketDetail";
import Checkout from "../pages/user/Checkout";
import PaymentAuth from "../pages/user/PaymentAuth";
import PaymentSuccess from "../pages/user/PaymentSuccess";
import MyTickets from "../pages/user/MyTickets";
import OrderHistory from "../pages/user/OrderHistory";
import OrderDetail from "../pages/user/OrderDetail";
import LoyaltyWallet from "../pages/user/LoyaltyWallet";
import RedeemPoints from "../pages/user/RedeemPoints";
import Profile from "../pages/user/Profile";

// ADMIN
import OperatorHome from "../pages/admin/OperatorHome";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* AUTH (NO LAYOUT) */}
        <Route path="/" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/403" element={<AccessDenied403 />} />

        {/* USER + ADMIN WITH LAYOUT */}
        <Route element={<Layout />}>

          {/* USER */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/events" element={<EventsBrowse />} />
          <Route path="/events-details"element={<EventDetails />} />
          <Route path="/seat-booking" element={<SeatBooking />} />
          <Route path="/seat-map" element={<SeatMap />} />
          <Route path="/ticket-detail" element={<TicketDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment-auth" element={<PaymentAuth />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/tickets" element={<MyTickets />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/order/:id" element={<OrderDetail />} />
          <Route path="/loyalty" element={<LoyaltyWallet />} />
          <Route path="/redeem" element={<RedeemPoints />} />
          <Route path="/profile" element={<Profile />} />

          {/* ADMIN */}
          <Route path="/admin" element={<OperatorHome />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;