import Style from '../components/css/Noruega.module.css'
import ComponenteProps from './ComponenteProps'
import bandera_noruega from '../assets/Img/bandeira_noruega.jpeg'

export default function Noruega () {
    return (
        <section className={Style.noruega}>
            <h1 className={Style.noruega_h1}>Conheça a Noruega</h1>
            <ComponenteProps
            lugar = "Noruega"
            texto = "A Noruega, país escandinavo conhecido por sua paisagem dramática, é famosa pelos seus fiordes profundos e impressionantes montanhas. Banhada pelo Mar do Norte, possui uma longa costa recortada e uma natureza exuberante. É um dos países com o mais alto padrão de vida do mundo, com foco em bem-estar social, educação e sustentabilidade. Sua economia é impulsionada pelo petróleo e pelo gás natural, além de um forte setor de pesca e energia hidrelétrica. A cultura norueguesa valoriza a vida ao ar livre, a tranquilidade e a igualdade." 
            bandeira = {bandera_noruega}/>
        </section>
    )
}