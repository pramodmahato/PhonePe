import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { FormControl, Select } from "@mui/material";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ResponsiveAppBar() {
  const [address, setAddress] = React.useState("");

  const handleChange = (event) => {
    setAddress(event.target.value);
  };

  const checkIfHome = () => {
    if (window.location.pathname === "/") {
      return {};
    } else {
      return { visibility: "hidden" };
    }
  };

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {window.location.pathname !== "/accounts" ? (
            <></>
          ) : (
            <Box>
              <a href={"/"} style={{ textDecoration: "none", color: "white" }}>
                <ArrowBackIcon
                  color="white"
                  sx={{
                    display: { xs: "flex", md: "none", width: "80%" },
                    mr: 1,
                  }}
                />
              </a>
            </Box>
          )}
          <>
            <Box sx={{ flexGrow: 0 }} style={checkIfHome()}>
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  alt="Pramod Mahato"
                  src="https://pramod.xyz/images/self.jpg"
                />
              </IconButton>
            </Box>

            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              style={checkIfHome()}
            >
              <FormControl>
                <Select
                  value={address}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  style={{
                    color: "white",
                    boxShadow: "none",
                  }}
                >
                  <MenuItem value="">Add Address</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </>
          <QrCodeScannerIcon
            color="white"
            sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}
            style={checkIfHome()}
          />
          <NotificationsIcon
            color="white"
            sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}
            style={checkIfHome()}
          />
          <HelpOutlineIcon
            color="white"
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
