import { FC } from 'react'
import styles from './RotatingWords.module.css'
import RotatingWord from './RotatingWord';

interface RotatingWordsProps {
    texts: string[];
}

const RotatingWords: FC<RotatingWordsProps> = ({texts}) => {
    
  return (
    <div className={styles.wordWrapper}>
        {texts.map((text) => (
            <RotatingWord word={text} key={text}/>
        ))}
    </div>
  )
}

export default RotatingWords