import { SubHeading } from "../../components";
import { images } from "../../constants";


const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title={'Contact'}/>
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Find Us</h1>
      <div className='app__wrapper-content'>
          <p className='p__opensans'>Lorem ipsum dolor sit aaliquptas porro molestiae!</p>
          <p className='cormorant' style={{color: '#DCCA87', margin: '2rem 0'}}>Opening Hours</p>
          <p className='p__opensans'></p>
          <p className='p__opensans'>Mon - Fri : 09:00 am - 03:00 pm</p>
          <p className='p__opensans'>Sat - Sun : 10:00 am - 04:00 pm</p>
      </div>
      <button className='custom__button' style={{marginTop: '2rem'}}>Visit Us</button>
    </div>

    <div className='app__wrapper_img'>
        <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
