import { Outlet } from 'react-router'
import { LanguageProvider } from './contexts/LanguageContext'
import Footer from './components/footer/Footer'
import Navigation from './components/header/Navigation'
import './App.css'
import './assets/_variables.css'
import Sidemenu from './components/sidemenu/Sidemenu'



function App() {
  return (
    <LanguageProvider>
      <Navigation />

      <Sidemenu />

      <Outlet />

      <Footer />
    </LanguageProvider>
  )
}

export default App

