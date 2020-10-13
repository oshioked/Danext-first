import Footer from '../components/Global/Footer/Footer';
import Navbar from '../components/Global/Navbar/Navbar';
import ApproachSection from '../components/Homepage/ApproachSection/ApproachSection';
import FullImageHeader from '../components/Homepage/FullImageHeader/FullImageHeader';
import HomeSection4 from '../components/Homepage/HomeSection4/HomeSection4';
import RobotsSection from '../components/Homepage/RobotsSection/RobotsSection';
import Section3 from '../components/Homepage/Section3/Section3';
import SoftwareSection from '../components/Homepage/SoftwareSection/SoftwareSection';
import Styles from './index.module.scss';

const Home = (props) =>{
  return(
    <div className = {Styles.home}>
      <Navbar/>
      <FullImageHeader/>
      <ApproachSection/>
      <Section3/>
      <HomeSection4/>
      <RobotsSection/>
      <SoftwareSection/>
      <Footer/>
    </div>
  )
}

export default Home;