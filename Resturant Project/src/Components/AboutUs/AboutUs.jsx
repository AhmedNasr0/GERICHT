import images from '../../constants/images'
import './AboutUs.css'
const AboutUs=()=>{
    return <div className="Aboutus_wrapper app__bg flex__center section__padding" id="about">
                <div className="Aboutus_Overlay">
                    <img src={images.G} alt="AboutUs Background" />
                </div>
                <div className="Aboutus_wrapper flex__center">
                    <div className="aboutus_Content">
                        <h1 className="headtext__cormorant">AboutUs</h1>
                        <img src={images.spoon} alt="about_spoon" className="spoon__img" /> 
                        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                        <button className='custom__button'>Know More</button>
                    </div>
                    <div className='Aboutus_knife'>
                        <img src={images.knife} alt="AboutUs Image" />
                    </div>
                    <div className="history_Content">
                        <h1 className="headtext__cormorant">Our History</h1>
                        <img src={images.spoon} alt="about_spoon" className="spoon__img" /> 
                        <p className='p__opensans'>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
                        <button className='custom__button'>Know More</button>
                    </div>
                </div>
        </div>
}
export default AboutUs