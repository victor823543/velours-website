import TextileDisplaySection from '../../components/TextileDisplaySection/TextileDisplaySection'
import img1 from '../../assets/images/secondSection/hotelTx1.webp'
import img2 from '../../assets/images/secondSection/hotelTx2.webp'
import img3 from '../../assets/images/secondSection/hotelTx3.webp'
import img4 from '../../assets/images/secondSection/hotelTx4.webp'
import img5 from '../../assets/images/secondSection/hotelTx5.webp'

const header = 'IDEAL TEXTILES FOR A COZY HOTEL AMBIANCE'
const text = {
    first: 'Create an atmosphere of comfort and coziness ',
    span: 'in your hotel with our diverse range of high-quality textiles. ',
    last: 'Our assortment includes curtains, sheers, decorative pillows, bed runners, and much more to meet all your room décor needs.'
}
const images = [img1, img2, img3, img4, img5]
const rotatingTexts = [
    'CURTAINS', 'BLACKOUT CURTAINS', 'SHEERS', 'ANTI-VANDAL SHEERS', 'NO-NOISE CURTAIN RODS', 'DECORATIVE PILLOWS', 'TABLE RUNNERS', 'TABLECLOTHS', 'NAPKINS'
]

const video = "videos/instaVideo2.mp4"

const HotelTextilesSection = () => {
  return (
    <TextileDisplaySection header={header} text={text} images={images} rotatingTexts={rotatingTexts} video={video}/>
  )
}

export default HotelTextilesSection