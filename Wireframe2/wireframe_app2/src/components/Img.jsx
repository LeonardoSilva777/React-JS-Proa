import Style from './Img.module.css'
import sonic from '../assets/img/sonic-devil.gif'

function Img (){
    return (
        <div className={Style.imagem}>
            <img src={sonic} alt="" />
        </div>
        
    )
}

export default Img