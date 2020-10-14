import Styles from './systems.module.scss';
import {useRouter} from 'next/router'
import HeroSection from '../../components/Systems/HeroSection/HeroSection';
import Navbar from '../../components/Global/Navbar/Navbar';
import Footer from '../../components/Global/Footer/Footer';

const Systems = props =>{
    console.log(props.id)
    const router = useRouter();

    return(
        <div className = {Styles.page}>
            <Navbar/>
            <HeroSection/>
            <HeroSection/>
            <HeroSection/>
            <HeroSection/>
            <HeroSection/>
            <Footer/>
        </div>
    )
}
export const getStaticProps = () =>{
    return{
        props: { id: 'call'}
    }
}

export const getStaticPaths = () =>{
    return{
        paths: [
            {params: {system: 'cube'}},
            {params: {system: 'micro'}},
            {params: {system: 'tower'}}
        ],
        fallback: false
    }
}
export default Systems;