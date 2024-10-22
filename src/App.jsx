import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Games from "./components/Games"
import Category from "./components/Category"
import Launcher from "./components/Launcher"
import Footer from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Games />
      <Category />
      <Launcher />
      <Footer />
    </>
  )
}

export default App
