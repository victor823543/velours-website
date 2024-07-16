import styles from './InstaLink.module.css'
import { FC, useState } from 'react'
import { motion } from 'framer-motion'
import useMousePosition from '../../hooks/useMousePosition'

interface InstaLinkProps {
  source: string;
}

const InstaLink: FC<InstaLinkProps> = ({source}) => {
  const [isHovering, setIsHovering] = useState(false)
  const {x, y} = useMousePosition()

  return (
    <div className={styles.instaLink}>
        <div className={styles.qrContainer}>
            <img src='https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/6629ee86a7a7fd8fd9b2fae9_insta-main-img.svg' alt="qr-code" 
              onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
            />
        </div>
        <motion.p className={`${styles.p} ${styles.instaLink}`}
          animate={isHovering ? {fontWeight: 700} : ''}
        >More in ours <br/> Instagram</motion.p> 

        {isHovering &&
          <motion.div className={styles.videoContainer}
            style={{x: x + 20, y: y - 320}}
          >
            <video src={source} loop autoPlay></video>
          </motion.div>
        }
    </div>
  )
}

export default InstaLink