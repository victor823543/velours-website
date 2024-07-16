import styles from './LandingSection.module.css'
import HeroSection from '../../components/HeroSection/HeroSection'

import hotelsImg from '../../assets/images/firstSection/hotels.webp'
import restaurantImg from '../../assets/images/firstSection/restaurant.webp'
import cateringImg from '../../assets/images/firstSection/catering.webp'
import automativeImg from '../../assets/images/firstSection/automative.webp'


const heroContent = [
    {title: 'HOTEL', source: hotelsImg},
    {title: 'RESTAURANT', source: restaurantImg},
    {title: 'CATERING', source: cateringImg},
    {title: '+AUTOMATIVE', source: automativeImg}
]

const LandingSection = () => {

  return (
    <div className={styles.mainContainer}>
        {heroContent.map((sectionContent) => (
            <HeroSection content={sectionContent} key={sectionContent.title}/>
        ))}
    </div>
  )
}

export default LandingSection