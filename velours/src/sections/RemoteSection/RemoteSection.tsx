import styles from './RemoteSection.module.css'
import InstaLink from '../../components/InstaLink/InstaLink'

import remoteImg from '../../assets/images/remote.webp'

const texts = [
    'Lighting control through blinds',
    'Scheduling the opening/closing of curtains',
    'Programmed opening of sheers for privacy',
    'Data collection on energy consumption',
    'Integration with smart home systems',
]

const RemoteSection = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.leftSection}>
            <div className={styles.videoContainer}>
                <video src="videos/instaVideo3.mp4" autoPlay loop muted></video>
            </div>
            <div className={styles.remoteContainer}>
                <img src={remoteImg} alt="remote" />
            </div>
        </div>
        <div className={styles.rightSection}>
            <div className={styles.instaLink}>
                <InstaLink source="videos/instaVideo3.mp4"/>    
            </div>
            <div className={styles.listContainer}>
                {texts.map((text, index) => (
                    <div className={styles.listItem} key={index}>
                        <p className={styles.p}>{text}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default RemoteSection