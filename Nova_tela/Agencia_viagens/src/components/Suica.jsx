import Style from '../components/css/Suica.module.css'
import ComponenteProps from './ComponenteProps'
import bandera_suica from '../assets/Img/bandeira_suica.jpeg'

export default function Suica (){
    return(
        <section className={Style.suica}>
            <h1 className={Style.suica_h1}>Conheça a Suiça</h1>
            <ComponenteProps
            lugar = "Suiça" 
            texto = "A Suíça é um país montanhoso no coração da Europa, conhecido por sua deslumbrante paisagem alpina, que inclui picos nevados, vales verdes e lagos cristalinos. Famosa por sua neutralidade política, a nação é sede de importantes organizações internacionais, como a Cruz Vermelha e a ONU. Sua economia é forte e diversificada, com destaque para o setor financeiro, a indústria de relógios de luxo e a produção de chocolates e queijos de alta qualidade. Com quatro línguas oficiais (alemão, francês, italiano e romanche), a Suíça é um exemplo de coexistência cultural e de eficiência."
            bandeira = {bandera_suica}/>
        </section>
    )
}