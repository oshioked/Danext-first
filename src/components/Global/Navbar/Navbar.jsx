import style from './Navbar.module.scss';
import Link from 'next/link';

const Navbar = props =>{
    return(
        <nav className = {style.navbar}>
            <Link href = "/">
                <a className = {style.brand}>
                    <img alt = "Logo" src = '/images/logo-dark.png'/>
                </a>
            </Link>
            <ul className = {style.navLinks}>
                <Link href = "/systems/cube">
                    <a><li>systems</li></a>
                </Link>
                
                <li>solutions</li>
                <li>technology</li>
            </ul>
        </nav>
    )
}

export default Navbar;