import './HeroStyles.css'

const Hero = (props) => {
    return (
        <>
            <div className={props.cName}>
                <img src={props.heroImg} style={{opacity:'0.6'}} alt="HeroImg"/>
            </div>

            <div className="hero-text">
                <h2 style={{color:'black',fontWeight:'700'}} >{props.title}</h2>
                <br></br>
                {/* <p>{props.text}</p> */}
                <a href={props.url} className={props.btnClass}>
                    {props.btnText}
                </a>
            </div>
        </>
    )
}

export default Hero






