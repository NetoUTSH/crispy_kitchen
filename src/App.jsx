import "./App.css";
import { FormComponent } from "./core/calendly-form/components/FormComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ViewLandindPageComponent } from "./core/landing-page/components/ViewLandingPage/ViewLandindPageComponent";
import LoginForm from "./core/components/login/login";
import RegisterForm from "./core/components/register/register";
import RecoverEmail from "./core/components/email/email";
import VerifyCode from "./core/components/rendemcode/rendemcode";
import ResetPassword from "./core/components/reset password/resetpassword";
import ErrorPage from "./core/components/error/error";
import { CartPage } from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/form" element={<FormComponent />} />
          <Route path="/" element={<ViewLandindPageComponent />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/recover" element={<RecoverEmail />} />
          <Route path="/verify" element={<VerifyCode />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
