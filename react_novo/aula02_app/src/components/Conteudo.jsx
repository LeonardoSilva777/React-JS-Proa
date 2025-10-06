import style from './Conteudo.module.css'


function Conteudo() {
    return (
        <section >
            <h1 className={style.titulo_conteudo}>Conteúdo</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Illum reiciendis omnis in sunt veniam voluptate hic ea quas quaerat 
                obcaecati porro, molestiae non tempora dolore cum optio suscipit ut 
                magnam.
            </p>
        </section>

    )
}

export default Conteudo