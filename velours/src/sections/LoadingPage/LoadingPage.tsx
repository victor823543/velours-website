import { useState, useEffect, FC } from 'react'
import styles from './LoadingPage.module.css'
import { useAnimate } from 'framer-motion'
import IncrementingNumber from '../../components/IncrementingNumber'
import hotelsImg from '../../assets/images/firstSection/hotels.webp'


interface LoadingPageProps {
    setNavBarState: (num: number) => void;
    finishLoading: () => void;
}

const LoadingPage: FC<LoadingPageProps> = ({setNavBarState, finishLoading}) => {
    const [scope, animate] = useAnimate()
    const [animateTextState, setAnimateTextState] = useState(0)

    useEffect(() => {
        if (scope.current) {
            const loadingAnimationFirst = async () => {
                await animate('.mainScreen', {y: '100%'}, {duration: .4, delay: .6})
                setNavBarState(1)
                animate('.mainScreen > p', {y: [50, 0], opacity: 1, filter: 'blur(0px)'}, {duration: 1})
                animate('.loading', {y: [50, 0], opacity: 1, filter: 'blur(0px)'}, {duration: 1, delay: .3})
                await animate('.progress', {y: [50, 0], opacity: 1, filter: 'blur(0px)'}, {duration: 1, delay: .6})
                setAnimateTextState(1)
            }
            loadingAnimationFirst()
        }
    }, [])

    useEffect(() => {
        if (animateTextState===2) {
        const loadingAnimationSecond = async () => {
            if (scope.current) {
                setNavBarState(2)
                await animate('.blackScreen', {y: '100%'}, {duration: .4, delay: .6})
                await animate('.image', {scale: [0, .3]}, {duration: .6, delay: 1.2, ease: 'easeIn'})
                await animate('.image', {scale: 1, borderRadius: '0px'}, {duration: 1, delay: .3, ease: 'easeIn'})
                finishLoading()
            }
        }  
        loadingAnimationSecond()
        }
    }, [animateTextState])

    

    return (
        <div ref={scope} className={styles.mainContainer}>
            <div className={`${styles.mainScreen} mainScreen`}>
                <p>SINCE 2005</p>
                <div>
                    <p className='loading'>LOADING</p>
                    <p className='progress'>{animateTextState && <IncrementingNumber callback={() => setAnimateTextState(2)}/>}%</p>
                </div>
            </div>
            <img className='image' src={hotelsImg} alt="hotel-image" />
            
            <div className={`${styles.blackScreen} blackScreen`}></div>
        </div>
  )
}

export default LoadingPage