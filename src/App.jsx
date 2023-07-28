import { Toaster } from "react-hot-toast"
import NavigationBar from './components/NavigationBar'
import AboutPage from "./pages/AboutPage"
import CartPage from "./pages/CartPage"
import HomePage from "./pages/HomePage"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Toaster position="top-center" />
    </>
  )
}

export default App
