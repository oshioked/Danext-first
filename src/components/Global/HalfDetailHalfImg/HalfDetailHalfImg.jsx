import CustomButton from '../../Global/CustomButton/CustomButton';
import style from './HalfDetailHalfImg.module.scss';


const HalfDetailHalfImg = ({imgRight}) =>{
    return(
        <div className = {style.section}>
            <div className = {style.imageHalf} style = {{order: imgRight? 1 : 0}}>
                <div className = {style.imageContainer}>
                    <img src = '/images/home/citywid.png' alt = "citywide"/>
                </div>
            </div>
            <div className = {style.detailHalf}>
                <p className = {style.tinyTitle}>TOWER</p>
                <h1 className = {style.mainTitle}>
                    Citywide fufillment
                </h1>
                <p className = {style.details}>
                    The Urbx system can retrieve, pick and pack multi-item orders 
                    and assemble them in minutes. Items can then be retrieved for 
                    on-demand delivery.
                </p>
                <CustomButton>DISCOVER TOWER</CustomButton>
            </div>
        </div>
    )
}

export default HalfDetailHalfImg;