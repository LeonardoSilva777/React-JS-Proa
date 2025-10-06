import Style from './css/Canada.module.css'
import ComponenteProps from './ComponenteProps'
import bandeira_canada from '../assets/Img/bandeira_canada.jpeg'

export default function Canada (){
    return(
        <section className={Style.canada}>
            <h1 className={Style.canada_h1}>Venha conhecer o Canada!</h1>
            <ComponenteProps 
                lugar = "Canada"
                texto = "O Canadá é um vasto país da América do Norte, conhecido por suas paisagens naturais de tirar o fôlego e seu clima frio. É um país bilíngue (inglês e francês) e culturalmente diverso, com cidades vibrantes como Toronto e Vancouver. Reconhecido por sua alta qualidade de vida, é um destino popular para turismo e imigração."
                bandeira = {bandeira_canada}/>
        </section>
    )
}