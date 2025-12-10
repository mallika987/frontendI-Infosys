import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import ProfileSetup from "./components/ProfileSetup";
import PractitionerVerify from "./components/PractitionerVerify";
import BookingForm from "./components/BookingForm";
import CalendarWidget from "./components/CalendarWidget";
import SessionDetails from "./components/SessionDetails";

export default function App() {
  const [page, setPage] = useState("login");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex gap-4 mb-6 flex-wrap">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setPage("login")}>Login</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setPage("register")}>Register</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setPage("profile")}>Profile Setup</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setPage("verify")}>Practitioner Verify</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setPage("booking")}>Booking Form</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setPage("calendar")}>Calendar</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setPage("session")}>Session Details</button>
      </div>

      {page === "login" && <Login />}
      {page === "register" && <Register />}
      {page === "profile" && <ProfileSetup />}
      {page === "verify" && <PractitionerVerify />}
      {page === "booking" && <BookingForm />}
      {page === "calendar" && <CalendarWidget />}
      {page === "session" && <SessionDetails />}
    </div>
  );
}
