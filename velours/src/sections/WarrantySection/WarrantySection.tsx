import styles from './WarrantySection.module.css'
import { useRef, useEffect, useState } from 'react'

const WarrantySection = () => {
    const ref = useRef(null)
    const [inView, setInView] = useState(false)
    const [number, setNumber] = useState(0)

    const duration = 2500

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setInView(true);
            } else {
              setInView(false);
            }
          },
          { threshold: 0.1 }
        );
    
        if (ref.current) {
          observer.observe(ref.current);
        }
    
        return () => {
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        };
      }, [ref]);

      useEffect(() => {
        if (!inView) return;

        let start: number | null = null;
        const range = 6 - 0;
    
        const animate = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const currentNumber = Math.min(0 + (range * (progress / duration)), 6);
          setNumber(Math.round(currentNumber));
          if (progress < duration) {
            requestAnimationFrame(animate);
          }
        };
    
        requestAnimationFrame(animate);
      }, [inView])
  return (
    <div className={styles.mainContainer}>
        <div className={styles.numberContainer}>
            <div ref={ref} className={styles.animatedNumber}>
                <span>{number}</span>
            </div>  
            <div className={styles.textContainer}>
                <p className={styles.p}>Warranty service from 3 to 6 years</p>
            </div> 
        </div>
        
       
    </div>
  )
}

export default WarrantySection