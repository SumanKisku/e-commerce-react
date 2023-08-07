import { Toaster } from "react-hot-toast"
import NavigationBar from './components/Common/NavigationBar'
import ProductPage from './components/Dynamic/ProductPage'
import AboutPage from "./pages/AboutPage"
import CartPage from "./pages/CartPage"
import HomePage from "./pages/HomePage"
import SignUpPage from "./pages/SignUpPage"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Toaster position="top-center" />
    </>
  )
}

export default App
