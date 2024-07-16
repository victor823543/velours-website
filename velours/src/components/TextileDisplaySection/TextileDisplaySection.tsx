import { FC, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import styles from './TextileDisplaySection.module.css'
import RotatingWords from '../RotatingWords/RotatingWords';
import InstaLink from '../InstaLink/InstaLink';

interface TextObject {
    first: string;
    span: string;
    last: string;
}

interface TextileDisplaySectionProps {
    header: string;
    text: TextObject;
    images: string[];
    rotatingTexts: string[];
    video: string;
}

const variants = {
    enter: (direction: 'left' | 'right') => ({x: (direction === 'right') ? '100%' : '-100%'}),
    center: { x: 0, transition: {
      duration: .5, ease: 'easeIn',
    }},
    exit: (direction: 'left' | 'right') => ({ x: (direction === 'right') ? '-100%' : '100%', transition: {
      duration: .5, ease: 'easeIn',
    }})
  }

const TextileDisplaySection: FC<TextileDisplaySectionProps> = ({header, text, images, rotatingTexts, video}) => {
    const [current, setCurrent] = useState(0)
    const [direction, setDirection] = useState<'left'|'right'>('left')
    const [canClick, setCanClick] = useState(true)

    const handleLeftClick = () => {
        setCanClick(false)
        setCurrent(prev => {
            let newValue = prev - 1
            if (newValue < 0) {
                newValue = images.length - 1
            }
            return newValue
        })
    }

    const handleRightClick = () => {
        setCanClick(false)
        setCurrent(prev => {
            let newValue = prev + 1
            if (newValue > images.length - 1) {
                newValue = 0
            }
            return newValue
        })
    }

  return (
    <div className={styles.mainContainer}>
        <div className={styles.topSection}>
            <h1 className={styles.h1}>{header}</h1>
            <div className={styles.imageSlider}>
                <div onMouseOver={() => setDirection('left')} onClick={canClick ? () => handleLeftClick() : undefined} className={`${styles.leftArrowContainer} ${styles.arrowContainer}`}>
                    <div className={styles.cornerBorders}></div>
                    <img className={styles.leftArrow} loading='lazy' src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/662a4769f1aff9b80a89e52c_arrow-prev.svg" alt="arrow-left" />
                </div>
                <div onMouseOver={() => setDirection('right')} onClick={canClick ? () => handleRightClick() : undefined} className={`${styles.rightArrowContainer} ${styles.arrowContainer}`}>
                    <div className={styles.cornerBorders}></div>
                    <img className={styles.rightArrow} loading='lazy' src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/662a4848a9bf455bf05d9d61_arrow-next.svg" alt="arrow-right" />
                </div>
                <div className={styles.imageContainer}>
                    <AnimatePresence>
                        <motion.img key={current} src={images[current]} alt="hotel-image" 
                            variants={variants}
                            custom={direction}
                            initial='enter'
                            animate='center'
                            exit='exit'
                            onAnimationComplete={() => setCanClick(true)}
                        />    
                    </AnimatePresence>
                    
                </div>
            </div>
            <p className={`${styles.smallScreenText} ${styles.p}`}>{text.first}<span className={styles.span}>{text.span}</span>{text.last}</p>
        
            <div className={styles.videoTextContainer}>
                <div className={styles.videoContainer}>
                    <video src={video} loop muted autoPlay></video>
                </div>
                <div className={styles.textContainer}>
                    <p className={`${styles.mediumScreenText} ${styles.p}`}>{text.first}<span className={styles.span}>{text.span}</span>{text.last}</p>
                    <div className={styles.instaLinkContainer}>
                        <InstaLink source={video}/>   
                    </div>
                    <p className={`${styles.p} ${styles.smallScreenLink}`}>More in ours <br/> Instagram</p> 
                </div>
            </div>    
        </div>
        <div className={styles.bottomSection}>
            <p className={`${styles.largeScreenText} ${styles.p}`}>{text.first}<span className={styles.span}>{text.span}</span>{text.last}</p>
            <RotatingWords texts={rotatingTexts}/>
        </div>
        
        
    </div>
  )
}

export default TextileDisplaySection