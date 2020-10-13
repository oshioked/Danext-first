import style from './CustomButton.module.scss';

const CustomButton = ({children}) =>{
    return(
        <button className = {style.customButton}>{children}</button>
    )
}

export default CustomButton;