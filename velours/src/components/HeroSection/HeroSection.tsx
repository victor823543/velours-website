import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, FC } from 'react'
import styles from './HeroSection.module.css'
import AnimatedText from '../AnimatedText/AnimatedText'

interface Content {
    title: string;
    source: string;
}

interface HeroSectionProps {
    content: Content;
}

const HeroSection: FC<HeroSectionProps> = ({content}) => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })
    const imgY = useTransform(scrollYProgress, [0, 1], ['-40vh', '40vh'])
    const imgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
    const titleY = useTransform(scrollYProgress, [0, 1], ['-30vh', '30vh'])

  return (
    <div className={styles.container} ref={ref} key={content.title}>
        <motion.h2 className={styles.h2}
            style={{y: titleY}}
        > <AnimatedText text={content.title}/> </motion.h2>
        <motion.img className={styles.img} src={content.source} alt="hero-image" 
            style={{y: imgY, opacity: imgOpacity}}
        />
    </div>
  )
}

export default HeroSection