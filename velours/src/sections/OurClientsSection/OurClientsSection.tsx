import styles from './OurClientsSection.module.css'
import { useState, useRef, useEffect } from 'react'
import ClientListItem from '../../components/ClientListItem/ClientListItem'

import img0 from '../../assets/images/clientsSection/apartel.webp'
import img1 from '../../assets/images/clientsSection/bank-hotel.webp'
import img2 from '../../assets/images/clientsSection/grand-hotel.webp'
import img3 from '../../assets/images/clientsSection/glibivka family.webp'
import img4 from '../../assets/images/clientsSection/rafael-hotel.webp'
import img5 from '../../assets/images/clientsSection/panorama-hotel.webp'
import img6 from '../../assets/images/clientsSection/lh-hotel.webp'
import img7 from '../../assets/images/clientsSection/status-hotel.webp'
import img8 from '../../assets/images/clientsSection/bukovel.webp'
import img9 from '../../assets/images/clientsSection/swiss-hotel.webp'
import img10 from '../../assets/images/clientsSection/sandal-hotel.webp'
import img11 from '../../assets/images/clientsSection/eurohotel.webp'
import img12 from '../../assets/images/clientsSection/sonata-hotel.webp'
import img13 from '../../assets/images/clientsSection/svityaz-resort.webp'
import img14 from '../../assets/images/clientsSection/kyivska-rus.webp'
import img15 from '../../assets/images/clientsSection/play-karpaty.webp'

const clients = [
    'APARTEL', 'BANK HOTEL', 'GRAND HOTEL', 'GLIBIVKA FAMILY PARK', 'RAFAEL HOTEL', 'PANORAMA HOTEL', 'LH HOTEL & SPA', 'STATUS HOTEL', 'BUKOVEL', 'SWISS HOTEL', 'SANDAL HOTEL', 'EUROHOTEL HOTEL', 'SONATA HOTEL', 'SVITYAZ RESORT', 'KYIVSKA RUS', 'PLAY KARPATY',
]

const images = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15]

const OurClientsSection = () => {
    const [currentAtCenter, setCurrentAtCenter] = useState(0)
    const elementRef = useRef<HTMLDivElement | null>(null)
    const [imgHeight, setImgHeight] = useState(0)

    useEffect(() => {
        const measureHeight = () => {
            if (elementRef.current) {
              const measuredHeight = elementRef.current.getBoundingClientRect().height
              setImgHeight(measuredHeight)
            }
          }
        
          measureHeight()
          window.addEventListener('resize', measureHeight)
        
          return () => {
            window.removeEventListener('resize', measureHeight)
          }
      }, [elementRef.current])

  return (
    <div className={styles.mainContainer}>
        <div className={styles.clientsContainer}>
            <p className={styles.pTop}>They have chosen us: </p>
            <div className={styles.clientsList}>
                {clients.map((name, index) => (
                    <h1 className={styles.listItem}
                        key={index}
                        style={(index === currentAtCenter) ? {opacity: 1} : {opacity: .5}}
                    >
                        <ClientListItem text={name} callback={() => setCurrentAtCenter(index)}/>
                    </h1>
                ))}
            </div>
        </div>
        <div className={styles.imgWrapper}>
            <p className={styles.clientP}>Become our next client <br /> right now!</p>
            <div ref={elementRef} style={{top: `calc(50vh - ${imgHeight / 2}px)`}} className={styles.stickyDiv}>
                <div className={styles.imageContainer}>
                    <img src={images[currentAtCenter]} alt="client-img" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurClientsSection