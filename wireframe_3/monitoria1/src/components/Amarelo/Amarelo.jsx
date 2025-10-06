import Style from '../Amarelo/Amarelo.module.css'

export default function Amarelo () {
    return(
        <section className={Style.amarelo}>
            <div className={Style.div_Azul}><p>Azul</p></div>
            <div className={Style.div_verde}><p>Verde</p></div>
        </section>
    )
}