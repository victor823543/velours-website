import { FC, useRef } from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'
import styles from './RotatingWords.module.css'

interface RotatingWordProps {
    word: string;
}

const RotatingWord: FC<RotatingWordProps> = ({word}) => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })
    const rotation = useTransform(scrollYProgress, [0, 1], ['-45deg', '75deg'])
    const blur = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ['blur(10px)', 'blur(0px)', 'blur(0px)', 'blur(10px)'])
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [.5, 1, 1, .5])

  return (
    <motion.div
        className={styles.rotatingWord}
        ref={ref}
        style={{rotateY: rotation, filter: blur, opacity}}
    >{word}</motion.div>
  )
}

export default RotatingWord