import Style from '../Vermelho/Vermelho.module.css'
import Loja from '../../assets/imagens/loja.jpg'


export default function Vermelho () {
    return (
        <section className={Style.vermelho}>

            <div className={Style.rosa}>
                <h1>Nossa Loja - Instrumentos Musicais </h1>
                <p>Se voce é um amante da musica, esta em busca de um novo instrumento musical e não abre
                    mão da qualidade, chegou ao lugar certo! aqui na nossa loja voce encontra os melhores 
                    itens, como: Teclado, Piano (Digital ou Acustico), contrabaixo, bateria, guitarra, Violão,
                    sopro e muito mais! Nossos instrumentos possuem um selo de qualidade das melhores marcas
                    do mercado! Escolha os seus favoritos e os receba em casa com toda a comodidade que voce 
                    precisa. Confira nossas opções disponiveis e tenha em mão instrumentos de ponta!
                </p>
            </div>
            
            <img src={Loja} alt="Imagem da loja" />
            <div></div>
        </section>
    )
}