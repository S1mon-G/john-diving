import { Outlet } from 'react-router'
import Header from "./components/header/Header"
import Footer from './components/footer/Footer'
import './App.css'
import './assets/_variables.css'


function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
