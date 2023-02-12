import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";

function UpiPin() {
  const navigate = useNavigate();

  const [state, setState] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const [pinLength, setPinLength] = useState(0);
  const [pin, setPin] = useState("----");
  const increaseLength = () => {
    if (pinLength < 4) {
      setPinLength((value) => value + 1);
    }
  };
  const decreaseLength = () => {
    if (pinLength > 0) {
      setPinLength((value) => value - 1);
    }
  };
  const validatePin = () => {
    if (pinLength === 4) {
      navigate({ pathname: "/balance" });
    } else {
      handleClick({
        vertical: "bottom",
        horizontal: "center",
      }).call();
    }
  };
  useEffect(() => {
    let newPin = "";
    for (let i = 1; i <= 4; i++) {
      if (i <= pinLength) {
        newPin += "•";
      } else {
        newPin += "-";
      }
    }
    setPin(newPin);
    if (pinLength < 4) {
    }
  }, [pinLength]);

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Please Enter Your PIN"
        key={vertical + horizontal}
        style={{ textAlign: "center" }}
      />
      <div style={{ padding: "20px" }}>
        <div style={{ width: "70%", float: "left" }}>
          <b>Citibank</b>
        </div>
        <div style={{ width: "30%", float: "right" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg"
            alt="UPI"
            style={{ height: "30px" }}
          ></img>
        </div>
      </div>
      <div
        className="pin-icon-outer"
      >
        <KeyboardArrowDownIcon
          className="pin-icon"
          color="white"
        />
      </div>
      <div>
        <div className="pin-enter">
          <label className="pin-label">ENTER UPI PIN</label>
          <RemoveRedEyeIcon
            className="pin-eye-icon"
            color="white"
          />
        </div>
        <br></br>
        <div className="pin-textarea">
          <div className="pin" style={{ letterSpacing: "0.1em" }}>
            {pin}
          </div>
        </div>
      </div>
      <br></br>
      <div className="numpad">
        <Stack spacing={0} direction="row">
          <Button
            variant="text"
            className="pin-button"
            onClick={increaseLength}
          >
            1
          </Button>
          <Button
            variant="text"
            className="pin-button"
            onClick={increaseLength}
          >
            2
          </Button>
          <Button
            variant="text"
            className="pin-button"
            onClick={increaseLength}
          >
            3
          </Button>
        </Stack>
        <Stack spacing={0} direction="row">
          <Button
            variant="text"
            className="pin-button"
            onClick={increaseLength}
          >
            4
          </Button>
          <Button
            variant="text"
            className="pin-button"
            onClick={increaseLength}
          >
            5
          </Button>
          <Button
            variant="text"
            className="pin-button"
            onClick={increaseLength}
          >
            6
          </Button>
        </Stack>
        <Stack spacing={0} direction="row">
          <Button
            variant="text"
            className="pin-button"
            onClick={increaseLength}
          >
            7
          </Button>
          <Button
            variant="text"
            className="pin-button"
            onClick={increaseLength}
          >
            8
          </Button>
          <Button
            variant="text"
            className="pin-button"
            onClick={increaseLength}
          >
            9
          </Button>
        </Stack>
        <Stack
          spacing={0}
          direction="row"
          style={{ backgroundColor: "#f0f2f3" }}
        >
          <IconButton
            onClick={decreaseLength}
            aria-label="delete"
            className="pin-delete-icon"
          >
            <BackspaceIcon style={{ color: "#30308e" }} />
          </IconButton>
          <Button
            variant="text"
            className="pin-button"
            style={{ width: "33.3%" }}
            onClick={increaseLength}
          >
            0
          </Button>
          <IconButton
            onClick={validatePin}
            aria-label="delete"
            className="pin-validate"
          >
            <CheckCircleIcon className="pin-submit" />
          </IconButton>
        </Stack>
      </div>
    </>
  );
}
export default UpiPin;
