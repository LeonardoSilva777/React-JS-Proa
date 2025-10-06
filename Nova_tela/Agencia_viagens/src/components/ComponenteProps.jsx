import Style from './css/ComponenteProps.module.css'
import Logo from '../assets/Img/viagens.jpg'

export default function ComponenteProps ({lugar,texto,bandeira}){
    return(
        <div className={Style.corpo_texto}>
            <h2>Venha conhecer esse lugar Incrivel {lugar}!!</h2>
            <p>{texto}</p>
            <br />
            <img src={bandeira} className={Style.imagem_props} alt="Logo da firma" />
        </div>
    )
}