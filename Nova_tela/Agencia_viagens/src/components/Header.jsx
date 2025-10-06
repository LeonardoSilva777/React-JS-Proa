import Style from './css/Header.module.css'
import logo from '../assets/Img/viagens.jpg'
import lupa from '../assets/Img/lupa.png'

function Header (){
    return(
     <header>
        <img src={logo} className={Style.logo} alt="Logo_viagens" />
        <nav className={Style.navegacao}>
            <a href="#">Home</a>
            <a href="#">Canada</a>
            <a href="#">Brasil</a>
            <a href="#">Noruega</a>
            <a href="#">Suiça</a> 
        </nav>
        <div className={Style.Busca}>
            <input type="text" />
        </div>

        <img src={lupa} className={Style.lupa} alt="lupa" />

        
     </header> 
    )
}


export default Header