import { useState, useEffect } from 'react'
import './App.css'
import LoadingPage from './sections/LoadingPage/LoadingPage'
import NavBar from './components/NavBar/NavBar'
import LandingSection from './sections/LandingSection/LandingSection'
import ShortAboutSection from './sections/ShortAboutSection/ShortAboutSection'
import HotelTextilesSection from './sections/HotelTextilesSection/HotelTextilesSection'
import LargeVideoSection from './sections/LargeVideoSection/LargeVideoSection'
import RemoteSection from './sections/RemoteSection/RemoteSection'
import WarrantySection from './sections/WarrantySection/WarrantySection'
import RestaurantTextilesSection from './sections/RestaurantTextilesSection/RestaurantTextilesSection'
import OurClientsSection from './sections/OurClientsSection/OurClientsSection'
import EndSection from './sections/EndSection/EndSection'

function App() {
  const [loading, setLoading] = useState(true)
  const [navBarState, setNavBarState] = useState(0)

  useEffect(() => {
    window.scrollTo({top: 0})
  }, [])

  return (
    <div>
      <NavBar startAnimation={navBarState===1} showWhole={navBarState===2} animationFinished={navBarState===3}/>
      {loading &&
        <LoadingPage setNavBarState={setNavBarState} finishLoading={() => {setLoading(false), setNavBarState(3)}}/>
      }  
      <LandingSection />
      <ShortAboutSection />
      <HotelTextilesSection />
      <LargeVideoSection />
      <RemoteSection />
      <WarrantySection />
      <RestaurantTextilesSection />
      <OurClientsSection />
      <EndSection />
    </div>
       
  )
}

export default App
