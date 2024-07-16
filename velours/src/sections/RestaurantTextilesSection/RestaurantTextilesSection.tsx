import TextileDisplaySection from "../../components/TextileDisplaySection/TextileDisplaySection"

import img1 from '../../assets/images/thirdSection/restImg1.webp'
import img2 from '../../assets/images/thirdSection/restImg2.webp'
import img3 from '../../assets/images/thirdSection/restImg3.webp'
import img4 from '../../assets/images/thirdSection/restImg4.webp'
import img5 from '../../assets/images/thirdSection/restImg5.webp'

const header = 'MODERN TEXTILES FOR RESTAURANTS'
const text = {
    first: 'Transform your restaurant into the perfect place for relaxation ',
    span: 'and enjoyment with our wide selection of high-quality textiles. Our range includes curtains, tablecloths, sheers, napkins, and much more to ',
    last: 'create a stylish and cozy environment for your establishment.'
}
const images = [img1, img2, img3, img4, img5]

const rotatingTexts = ['CURTAINS', 'SHEERS', 'TABLECLOTHS', 'NAPKINS', 'WOODEN BLINDS', 'SUNSHADES']

const video = "videos/instaVideo4.mp4"

const RestaurantTextilesSection = () => {
  return (
    <TextileDisplaySection header={header} text={text} images={images} rotatingTexts={rotatingTexts} video={video}/>
  )
}

export default RestaurantTextilesSection