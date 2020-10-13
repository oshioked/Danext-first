import CustomButton from '../../Global/CustomButton/CustomButton';
import style from './HomeSection4.module.scss';

const DetailCard = props =>{
    return(
        <div className = {style.detailCard}>
            <div className = {style.imageContainer}>
                <img src = {props.img} alt = 'answer1'/>
            </div>
            <h3>Become an Urbx Logistics Partner</h3>
            <p>We can fill in any need for your business. Our custom logistics systems are flexible enough to accommodate any company. Check out our full-service, high performance logistics options.</p>
            <CustomButton>DISCOVER LOGISTICS</CustomButton>
        </div>
    )
}

const HomeSection4 = props =>{
    return(
        <div className = {style.HomeSection4}>
            <h6>THE ANSWER</h6>
            <div className = {style.container}>
                <div className = {style.largerSide}>
                    <DetailCard img = '/images/home/answer1.jpg' />
                </div>
                <div className = {style.smallerSide}>
                    <DetailCard img = '/images/home/answer2.jpg'/>
                </div>                
            </div>

        </div>
    )
}

export default HomeSection4;