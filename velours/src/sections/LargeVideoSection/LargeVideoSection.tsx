import styles from './LargeVideoSection.module.css'


const LargeVideoSection = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.videoContainer}>
        <video src='videos/largeVideo.webm' autoPlay loop muted></video>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.h1}>AUTOMATED TEXTILE MANAGEMENT</h1>
        <div className={styles.pContainer}>
          <p className={styles.p}>Creating comfort and efficiency: <span>automated control of blinds, curtains, and sheers opens up new possibilities for hotels and restaurants striving to create a unique atmosphere for their guests. </span>This technology allows easy control of lighting and privacy, ensuring comfortable conditions throughout the day.</p>
          <p className={styles.p}><span>Programming for efficiency: automated control allows </span>scheduling the opening and closing of textile products according to sleep schedules. <span>This ensures optimal energy usage and saves time and effort for staff, allowing them to focus on providing high-quality service to their guests.</span></p>  
        </div>
        
      </div>
    </div>
  )
}

export default LargeVideoSection