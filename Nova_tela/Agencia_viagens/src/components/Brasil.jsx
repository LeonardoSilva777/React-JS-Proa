import ComponenteProps from './ComponenteProps'
import Style from './css/Brasil.module.css'
import bandeira_brasil from '../assets/Img/bandeira_brasil.jpeg'

export default function Brasil (){
    return (
        <section className={Style.brasil} > 
            <h1 className={Style.brasil_h1}>Venha conhecer o Brasil!</h1>
            <ComponenteProps 
            lugar = "Brasil"
            texto = "O Brasil, maior país da América do Sul, é uma nação de contrastes e rica diversidade. Conhecido por sua floresta amazônica, que abriga uma biodiversidade inigualável, e pelo icônico Carnaval, que celebra a cultura e a música do povo. Além de suas belezas naturais, como as praias paradisíacas e o Pantanal, o país se destaca pela sua vibrante cultura, influenciada por indígenas, europeus e africanos. É um lugar de gente acolhedora e de paisagens de tirar o fôlego"
            bandeira = {bandeira_brasil}
            />
        </section>
    )
}