import Style from '../Laranja/Laranja.module.css'

export default function Laranja () {
    const urlMapa = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.122569257649!2d-46.694390323798665!3d-23.528093578822606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef87505aee2fb%3A0xcdf6c5070269884e!2sR.%20Tito%2C%2054%20-%20Vila%20Romana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005051-000!5e0!3m2!1spt-BR!2sbr!4v1760920151791!5m2!1spt-BR!2sbr";
    return(
        <section className={Style.laranja}>
            <div>
                <iframe
                    width="500px"
                    height="310"
                    style={{ border: 0 }}
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    src={urlMapa}
                ></iframe>
            </div>

            <div className={Style.conteudo}>
                <h1>Nossa Loja - Instrumentos Musicais </h1>
                <p>"Está situada na Rua Tito, 54 - Pompeia, próximo ao teatro Cacilda Becker, 
                    em uma construção do século XIX, numa área de 500m2, com uma variada gama 
                    de instrumentos, em um ambiente agradável para toda a família!"
                </p>
            </div>


        </section>
    )
}