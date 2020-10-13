import CustomButton from '../CustomButton/CustomButton';
import { IgIcon, TwitterIcon } from '../svgs';
import style from './Footer.module.scss';

const Footer = props =>{
    return(
        <div className = {style.footer}>
            <div className = {style.container}>
                <div className = {style.mainSection}>
                    <div className = {style.detailSection}>
                        <div className = {style.detailSet}>
                            <h4>CONTACT</h4>
                            <p>
                                Don’t just take our word for it - contact us today to speak with a supply 
                                chain expert who can talk through your business needs and customize our 
                                solution to fit.
                            </p>                        
                        </div>       
                        <div className = {style.detailSet}>
                            <h4>UBRX HEADQUARTERS</h4>
                            <p>
                                12 Channel St
                                <div>Boston, MA 02210</div>
                            </p>                        
                        </div>                        
                    </div>
                    <div className = {style.formSection}>
                        <form>
                            <input type = "text" placeholder = "What's your name?" />
                            <div className = {style.halfInputContainer}> 
                                <input className = {style.halfInput} type = "text" placeholder = "Your email" />
                                <input className = {style.halfInput} type = "text" placeholder = "Your company" />                            
                            </div>

                            <textarea placeholder = "Your message"></textarea>
                            <CustomButton style = {{padding: '10px 40px'}}>Send</CustomButton>
                        </form>
                    </div>
                </div>
                <div className = {style.socialsSection}>
                    <div className = {style.iconsContainer}>
                        <TwitterIcon/>
                        <IgIcon/>
                    </div>
                    <p>ERMS OF USE / / DATA PROTECTION POLICY / / 2019 URBX</p>
                </div>
            </div>

        </div>
    )
}

export default Footer;