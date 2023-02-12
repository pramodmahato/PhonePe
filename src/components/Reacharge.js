import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import ChargingStationOutlinedIcon from "@mui/icons-material/ChargingStationOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import AddHomeOutlinedIcon from "@mui/icons-material/AddHomeOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Recharge() {
  const allItems = [
    {
      icon: ChargingStationOutlinedIcon,
      text: "Mobile Recharge",
    },
    {
      icon: LiveTvOutlinedIcon,
      text: "DTH",
    },
    {
      icon: EmojiObjectsOutlinedIcon,
      text: "Electricity",
    },
    {
      icon: CreditCardOutlinedIcon,
      text: "Credit Card Bill Payment",
    },
    {
      icon: AddHomeOutlinedIcon,
      text: "Rent Payment",
    },
    {
      icon: SavingsOutlinedIcon,
      text: "Loan Payment",
    },
    {
      icon: SchoolOutlinedIcon,
      text: "Education Fees",
    },
  ];
  return (
    <Card className="recharge-main">
      <div className="money-transfer-text">
        Recharge & Pay Bills
        <div className="rc-text">My Bills</div>
      </div>
      <CardContent>
        {allItems.map((item) => {
          return (
            <div className="rc-card-content" key={item.text}>
              <IconButton className="rc-icon">
                {<item.icon className="rc-inner-icon" />}
              </IconButton>
              <div>
                <label className="rc-label">{item.text}</label>
              </div>
            </div>
          );
        })}
        <div className="rc-card-content" style={{ marginTop: "15px" }}>
          <IconButton
            style={{
              color: "white",
              backgroundColor: "#6739B7",
              borderRadius: "15px",
              marginLeft: "20px",
            }}
          >
            <KeyboardArrowRightIcon className="rc-inner-icon" />
          </IconButton>
          <div>
            <label className="rc-label">See All</label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Recharge;
