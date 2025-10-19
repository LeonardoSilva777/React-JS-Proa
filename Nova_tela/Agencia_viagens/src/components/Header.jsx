import { Link } from 'react-router-dom'
import Style from './css/Header.module.css'
import logo from '../assets/Img/viagens.jpg'
import lupa from '../assets/Img/lupa.png'

function Header (){
    return(
     <header>
        <img src={logo} className={Style.logo} alt="Logo_viagens" />
        <nav className={Style.navegacao}>
            <Link to='/'>Home</Link>
            <Link to='/Canada'>Canada</Link>
            <Link to='/Brasil'>Brasil</Link>
            <Link to='/Noruega'>Noruega</Link>
            <Link to='/Suica'>Suiça</Link>
            
        </nav>
        <div className={Style.Busca}>
            <input type="text" />
        </div>

        <img src={lupa} className={Style.lupa} alt="lupa" />

        
     </header> 
    )
}


export default Header