import { Toaster } from "react-hot-toast"
import NavigationBar from './components/Common/NavigationBar'
import ProductPage from './components/Dynamic/ProductPage'
import AboutPage from "./pages/AboutPage"
import CartPage from "./pages/CartPage"
import HomePage from "./pages/HomePage"
import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import { Route, Routes } from "react-router-dom"
import PaymentSuccessfulPage from "./pages/PaymentSuccessful"

function App() {

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/paymentsuccess" element={<PaymentSuccessfulPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Toaster position="top-center" />
    </>
  )
}

export default App
