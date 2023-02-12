import ResponsiveAppBar from "./ResponsiveAppBar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import Carousell from "./Carousell";
import BankAccounts from "./BankAccounts";
function Accounts(){
    return(
        <ThemeProvider theme={theme}>
        <ResponsiveAppBar/>
        <Carousell/>
        <BankAccounts/>
        </ThemeProvider>
    );
}
export default Accounts;