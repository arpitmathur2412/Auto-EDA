import './HomeInfoStyles.css'
import {Component} from "react";

class HomeData extends Component{
    render() {
        return(
            <div className={this.props.className}>
                <div className="info-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="home-info-img">
                    <img src={this.props.img1} alt="img"/>
                    <img src={this.props.img2} alt="img"/>
                </div>
            </div>

        )
    }
}

export default HomeData
