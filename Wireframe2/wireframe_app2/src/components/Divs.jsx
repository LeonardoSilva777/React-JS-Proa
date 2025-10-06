import Style from './Divs.module.css'

function Divs (){
    return (
        <aside className={Style.divs_container}>
            <div className={Style.divs}></div>
            <div className={Style.divs}></div>
        </aside>
    )
}

export default Divs