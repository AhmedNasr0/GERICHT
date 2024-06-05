
import images from '../../constants/images'

const SubHeader=({title})=>{
    return <>
        <div style={{ marginBottom: '1rem' }}>
            <h3 className="P_title" style={{color:'white'}}>{title}</h3>
            <img src={images.spoon} alt="spoon_image" className="spoon__img" />
        </div>
    </>
}
export default SubHeader