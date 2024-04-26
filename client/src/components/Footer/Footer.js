import './FooterStyles.css'

const Footer = () => {
    return(
        <div className={'footer'}>

            <div className="top">
                <div>
                    <h1>DataWise</h1>
                    <h6>Explore your data!</h6>
                </div>
                
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Products</h4>
                    <a href="/">EDA Playground</a>
                </div>
                <div>
                    <h4>Contributors</h4>
                    <a href="/">Arpit Mathur</a>
                    <a href="/">Kunal Kumar Sahoo</a>
                </div>
                {/*<div>*/}
                {/*    <h4>Products</h4>*/}
                {/*    <a href="/">Stock Prediction</a>*/}
                {/*    <a href="/">Saving Calculator</a>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Footer






