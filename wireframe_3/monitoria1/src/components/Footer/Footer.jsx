import Style from '../Footer/Footer.module.css'
import whats from '../../assets/imagens/whats.png'
import insta from '../../assets/imagens/insta.png'
import face from '../../assets/imagens/face.png'

export default function Footer (){
    return(
        <footer>
            <h1>Nossa Loja - Instrumentos Musicais</h1>
            <p>Rua Tito, 54 - Lapa</p>
            <p>São Paulo - Brasil</p>
            <div className={Style.icon}>
                <img src={whats} alt="Zap-WhatsApp"/>
                <img src={insta} alt="Instagram" />
                <img src={face} alt="Facebook" />
            </div>
        </footer>
    )
}