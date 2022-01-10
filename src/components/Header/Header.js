import './Header.css';

import { Link, animateScroll as scroll } from "react-scroll";
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function Header(){

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return(
        <header>
            <div className='container flex'>
                <div className='logo'>
                    <img src="" alt="Logo" />
                </div>

                <nav className="navigation">
                    <ul className='flex'>
                        <li onClick={() => scrollToTop() }>Home</li>
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        ><li>Sobre</li></Link>
                        <Link
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        ><li>Serviços</li></Link>
                        <Link
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        ><li>Portfólio</li></Link>
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        ><li>Contato</li></Link>
                        <a href="https://instagram.com/erik.gabriel.z" target='_blank' rel="noreferrer"><li><FaInstagram /></li></a>
                        <a href="https://facebook.com/erik.gabriel.Eg" target='_blank' rel="noreferrer"><li><FaFacebookF /></li></a>
                    </ul>
                </nav>
            </div>
        </header>
    )
}