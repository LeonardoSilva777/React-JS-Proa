import Style from '../Azul/Azul.module.css'
import guitarrinha from '../../assets/imagens/guitarrinha.jpg'

export default function Azul () {
    return(
        <section className={Style.azul}>
            <div className={Style.branca}><p>
                <img src={guitarrinha} alt="Produto-guitarrinha" /> 
                <h1>Violão yamaha C70 2 classico nylon acustico natural brilhante</h1>
                <p>R$ 989,50</p>  
            </p></div>
            <div className={Style.branca}><p>
                <img src={guitarrinha} alt="Produto-guitarrinha" />
                <h1>Violão yamaha C70 2 classico nylon acustico natural brilhante</h1>
                <p>R$ 989,50</p>    
            </p></div>
            <div className={Style.branca}><p>
                <img src={guitarrinha} alt="Produto-guitarrinha" />
                <h1>Violão yamaha C70 2 classico nylon acustico natural brilhante</h1>
                <p>R$ 989,50</p>   
            </p></div>
            <div className={Style.branca}><p>
                <img src={guitarrinha} alt="Produto-guitarrinha" />
                <h1>Violão yamaha C70 2 classico nylon acustico natural brilhante</h1>
                <p>R$ 989,50</p>    
            </p></div>
        </section>
    )
}