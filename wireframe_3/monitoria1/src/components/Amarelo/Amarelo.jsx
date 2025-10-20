import Style from '../Amarelo/Amarelo.module.css'
import whats from '../../assets/imagens/whats.png'
import insta from '../../assets/imagens/insta.png'
import face from '../../assets/imagens/face.png'

export default function Amarelo () {
    return(
        <section className={Style.amarelo}>
            <form action="/enviar-pedido" method="post">
                <div>
                    <label for="nome">Entre com o seu nome:</label>
                    <input type="text" id="nome" name="nome" placeholder="Digite seu nome aqui:" required></input>
                </div>
                <div>
                    <label for="nome">Entre com o seu nome:</label>
                    <input type="text" id="nome" name="nome" placeholder="Digite seu nome aqui:" required></input>
                </div>
                <div>
                    <textarea id="pedido" name="pedido" placeholder="Faça seu pedido aqui:" rows="5" cols="50"></textarea>
                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
            
            <div className={Style.div_verde}>
                <h2>Acesse tambem nossas redes socias:</h2>
                <div className={Style.icon}>
                    <img src={whats} alt="Zap-WhatsApp"/>
                    <img src={insta} alt="Instagram" />
                    <img src={face} alt="Facebook" />
                </div>
                
            </div>
        </section>
    )
}