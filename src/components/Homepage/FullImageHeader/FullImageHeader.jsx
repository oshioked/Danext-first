import style from './FullImageHeader.module.scss';

const FullImageHeader = () =>{
    return(
        <header className = {style.header}>
            <div className = {style.headerOverlay}>
                <div className = {style.scrollMessage}>Scroll for more</div>
            </div>
            <div className = {style.bgImgHolder}>
                <img src = '/images/homeHeader.png' alt = 'home header'/>
            </div>
        </header>
    )
}

export default FullImageHeader;