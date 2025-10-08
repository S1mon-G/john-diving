import { Outlet } from 'react-router'
import { LanguageProvider } from './contexts/LanguageContext'
import Footer from './components/footer/Footer'
import Navigation from './components/header/Navigation'
import './App.css'
import './assets/_variables.css'



function App() {

  return (
    <>
      <LanguageProvider>

        <Navigation />
        <Outlet />
        <Footer />

      </LanguageProvider>
    </>
  )
}

export default App
