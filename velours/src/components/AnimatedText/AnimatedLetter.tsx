import { FC } from 'react'
import { motion, MotionValue, useTransform } from 'framer-motion';

interface AnimatedLetterProps {
    letter: string;
    letterIndex: number;
    wordLength: number;
    progress: MotionValue<number>;
}

const AnimatedLetter: FC<AnimatedLetterProps> = ({letter, letterIndex, wordLength, progress}) => {
    const center = (wordLength - 1) / 2
    const distance = Math.abs(letterIndex - center)
    const relativePosition = distance / center
    const reverseRelativePosition = 1 - relativePosition
    const blur = useTransform(progress, [0, Math.min(relativePosition + 0.2, 1)], [`blur(${10 * Math.min((relativePosition) + 0.2, 1)}px)`, 'blur(0px)'])
    const scale = useTransform(progress, [0, .8], [Math.min(0.3 + (reverseRelativePosition * 1.2), 1.2), 1])
    const opacity = useTransform(progress, [0, .55], [Math.min(1, 0.3 + reverseRelativePosition), 1])

    return (
        <motion.span
            style={{filter: blur, opacity, scale, transformOrigin: '50% 100%', display: 'inline-block'}}
        >{letter}</motion.span>
    )
}

export default AnimatedLetter