
import images from '../../constants/images'
import SubHeader from '../subHeader/subHeader'

import './header.css'

const Header=()=>{
    return <div className='header_wrapper'>
        <div className="header_Info">
            <SubHeader title="Chase The New Flavour" />
            <h1 className='header_Info_h1'>THE KEY TO FINE DINING</h1>
            <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
            <button>Explore Menu</button>
        </div>
        <div className="header_img">
            <img src={images.welcome} alt="header meal Image" />
        </div>
    </div>
}
export default Header 