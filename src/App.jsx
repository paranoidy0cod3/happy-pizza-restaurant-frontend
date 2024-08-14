import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Error,
  Home,
  Signup,
  Login,
  Success,
  Verifyotp,
  ResetPassword,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ResetPassword />} />
        <Route path="/veryfy-otp" element={<Verifyotp />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;