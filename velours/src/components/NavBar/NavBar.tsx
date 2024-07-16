import { FC, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './NavBar.module.css'

interface NavBarProps {
    startAnimation: boolean;
    showWhole: boolean;
    animationFinished: boolean;
}

const variants = {
    center: {x: '-50%', y: 'calc(50vh - 100%)', opacity: 1, scale: 1.3, filter: 'blur(0px)', color: 'black', 
        transition: {duration: .5}},
    top: {x: '-50%', y: '30%', opacity: 1, scale: .7, color: 'white', filter: 'blur(0px)', 
        transition: {duration: .8, delay: 2, ease: 'easeIn', color: {duration: .2, delay: .8}}},
    scrolledBlack: {x: '-50%', y: '30%', opacity: 1, scale: .7, color: 'black', filter: 'blur(0px)', 
        transition: {duration: .2}},
    scrolledWhite: {x: '-50%', y: '30%', opacity: 1, scale: .7, color: 'white', filter: 'blur(0px)', 
        transition: {duration: .2}},
}

const NavBar: FC<NavBarProps> = ({startAnimation, showWhole, animationFinished}) => {
    const [hasScrolled300vh, setHasScrolled300vh] = useState(false);


  useEffect(() => {
    if (animationFinished) {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;
            const scrollThreshold = 3.9 * viewportHeight;
      
            if (scrollPosition >= scrollThreshold) {
              setHasScrolled300vh(true);
            } else {
              setHasScrolled300vh(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        handleScroll();

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }

  }, [animationFinished]);

  return (
    <>  
        {(startAnimation || showWhole || animationFinished) &&
            <motion.div className={`${styles.center} center`}
                initial={{x: '-50%', y: '25vh', opacity: 0, scale: 1.3, filter: 'blur(10px)', color: 'black'}}
                variants={variants}
                animate={startAnimation ? 'center' : showWhole ? 'top' : (animationFinished && hasScrolled300vh) ? 'scrolledBlack' : animationFinished ? 'scrolledWhite' : ''}
            >
                <motion.h2
                >VELOURS</motion.h2>
                <motion.p
                >H<span>O</span>R<span>E</span>C<span>A</span></motion.p>
            </motion.div> 
        }
        
    </>
  )
}

export default NavBar