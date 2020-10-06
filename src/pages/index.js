import Navbar from '../components/Global/Navbar/Navbar';
import FullImageHeader from '../components/Homepage/FullImageHeader/FullImageHeader';
import Styles from './index.module.scss';

const Home = (props) =>{
  return(
    <div className = {Styles.home}>
      <Navbar/>
      <FullImageHeader/>
    </div>
  )
}

export default Home;