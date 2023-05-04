// import logo from "./logo.svg";
import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import BottomNav from "./components/BottomNav";
import Carousell from "./components/Carousell";
import MoneyTransfers from "./components/MoneyTransfers";
import { useEffect } from "react";
import Promo from "./components/Promo";
import Recharge from "./components/Reacharge";

var rendered = false;
function App() {
  //Set the Title of the Web App
  useEffect(() => {
    document.title = 'PhonePe';
  }, []);

  //Check if the Device is Mobile or Desktop or Tablet
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    return (
      <ThemeProvider theme={theme}>
        <div className="main">
        <ResponsiveAppBar />
        <Carousell />
        <MoneyTransfers/>
        <Promo/>
        <Recharge/>
        <BottomNav/>
      </div>
      </ThemeProvider>
    
  );
  }else{
    // false for not mobile device
    if(!rendered){
      document.write("This Web App is accessible only on Mobile Device");
      rendered = true;
      return;
    }
  }
}

export default App;
