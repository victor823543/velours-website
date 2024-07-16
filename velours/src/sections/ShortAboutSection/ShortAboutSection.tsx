import styles from './ShortAboutSection.module.css'
import HoverEffectText from '../../components/HoverEffectText/HoverEffectText'
import InstaLink from '../../components/InstaLink/InstaLink'

const ShortAboutSection = () => {
  return (
    <div className={styles.mainContainer}>
        <h1 className={styles.h1}>
            <HoverEffectText text='FULL RESPONSIBILITY FROM PROJECT TO IMPLEMENTATION.'/>   
        </h1>
        
        <div className={styles.outerContainer}>
            <div className={styles.infoTextContainer}>
                <p className={styles.p}>More about us</p>
                <div>
                    <p className={styles.p}>The textile production Velours HoReCa was founded in Lviv in 2005. <span className={styles.span}>Our activity is focused on professionally outfitting the interiors of hotels, restaurants, cafes, and bars with textile products.</span></p>      
                    <div className={styles.qrContainer}>
                        <InstaLink source='videos/instaVideo1.mp4'/>
                    </div>
                </div>
            </div>
            <div className={styles.videoAboutContainer}>
                <div className={styles.videoContainer}>
                    <video src="videos/instaVideo1.mp4" loop muted autoPlay></video>
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.listContainer}>
                        <div className={styles.listItem}>
                            <p className={styles.p}>With extensive experience in the Horeca sector - 18 years <span className={styles.span}>[as of 2024]</span></p>
                        </div>
                        <div className={styles.listItem}>
                            <p className={styles.p}>We offer both warranty and post-warranty servicing.</p>
                        </div>
                    </div>  
                    <p className={`${styles.p} ${styles.instaLink}`}>More in ours Instagram</p>    
                </div>
                 
            </div>
            
        </div>
        
    </div>
  )
}

export default ShortAboutSection