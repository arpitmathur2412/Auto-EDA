import Footer from "../components/Footer/Footer";
import StockList from "../components/StockList/StockList"
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar/Navbar"
import Navbarf from "../components/Navbar/Navbarf";


const Service = () => {
    
    const navigate=useNavigate();
    
    useEffect(() => {
        if(!localStorage.getItem('token')){
        navigate("/")
        }
        // else fetchUser()
    })
  
    
    return (
        <>
        <Navbarf/>
        <StockList/>
        <Footer />
        </>
    )
}

export default Service



