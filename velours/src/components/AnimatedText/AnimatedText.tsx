import { FC, useRef } from 'react';
import { useScroll } from 'framer-motion';
import AnimatedLetter from './AnimatedLetter';

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: FC<AnimatedTextProps> = ({ text }) => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start end', 'end center']
    })

    return (
        <span ref={ref}>
        {text.split('').map((char, index) => (
            <AnimatedLetter key={char + index} letter={char} wordLength={text.length} letterIndex={index} progress={scrollYProgress}/>
        ))}
        </span>
    );
};

export default AnimatedText;
