import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AddToHomeScreenIcon from "@mui/icons-material/AddToHomeScreen";
import ReplayIcon from "@mui/icons-material/Replay";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function MoneyTransfers() {
  const myIcons = [
    {
      icon: PersonIcon,
      text: "To Mobile Number",
      id: "1",
      link: "/",
    },
    {
      icon: AddToHomeScreenIcon,
      text: "To Bank/ UPI ID",
      id: "2",
      link: "/",
    },
    {
      icon: ReplayIcon,
      text: "To Self Account",
      id: "3",
      link: "/",
    },
    {
      icon: AccountBalanceIcon,
      text: "Check Bank Balance",
      id: "4",
      link: "/accounts",
    },
  ];
  return (
    <Card className="mt-card">
      <div className="money-transfer-text">Money Transfers</div>
      <CardContent className="mt-card-content">
        {myIcons.map((item) => {
          return (
            <a href={item.link} className="mt-link" key={item.id}>
              <div>
                <IconButton className="mt-icon">{<item.icon />}</IconButton>
                <div>
                  <label className="mt-icon-text">{item.text}</label>
                </div>
              </div>
            </a>
          );
        })}
      </CardContent>
      <div className="mt-upi">
        <div>
          <label className="mt-upi-label">My UPI ID:</label>
          <label className="mt-upi-email">pramod@test</label>
          <IconButton className="mt-upi-icon">
            <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
          </IconButton>
        </div>
      </div>
    </Card>
  );
}

export default MoneyTransfers;
