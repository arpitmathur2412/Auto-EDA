import {React, useState} from "react";
import Stocks from "./Stocks";
import Dashboard from "./Dashboard";
import "./StockList.css";

const StockList = () => {
  const [isLoading,setLoading]=useState(false)

  return (
    <div className="stocklist" style={{marginTop:'10%'}}>
      <Stocks isLoading={isLoading} setLoading={setLoading}/>
      <Dashboard isLoading={isLoading} setLoading={setLoading} />
    </div>
  );
};

export default StockList;
